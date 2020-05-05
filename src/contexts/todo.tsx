import React, {
  createContext,
  useDebugValue,
  useState,
  useCallback,
  useMemo,
  useContext,
} from "react";
import "@firebase/firestore";
import { UserContext } from "./user";
import firebase from "../plugins/firebase";

interface ITodo {
  uid: string | null;
  todo: string | null;
  isComplete: boolean;
  created_at: any;
}

interface ITodoContext {
  todos: ITodo[];
  add: Function;
}

const TodoContext = createContext<ITodoContext>({ todos: [], add: () => {} });

const TodoProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const { user } = useContext(UserContext);

  const collection = useMemo(() => {
    const t = firebase.firestore().collection("todos");

    // 最初はnullなので、チェック
    if (user?.uid) {
      console.log(user);
      console.log(user.uid);
      t.where("uid", "==", user.uid).onSnapshot((query) => {
        const data: any = [];
        query.forEach((d) => {
          console.log("forEach");
          console.log(d);
          data.push({ ...d.data(), docId: d.id });
        });
        console.log(data);
        setTodos(data);
      });
    }

    return t;
  }, [user]);

  const add = useCallback(async (text: string) => {
    try {
      if (user) {
        await collection
          .add({
            uid: user?.uid,
            text,
            isCompelte: false,
            created_at: new Date(),
          })
          .then((ref) => {
            console.log("Todo Added with id = " + ref.id);
          });
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <TodoContext.Provider value={{ todos, add }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
