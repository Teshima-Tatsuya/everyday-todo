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
  uid: string;
  todo: string;
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
  const { user, isLoading } = useContext(UserContext);

  const collection = useMemo(() => {
    const t = firebase.firestore().collection("todos");

    // 最初はnullなので、チェック
    if (user?.uid) {
      console.log(user);
      console.log(user.uid);
      t.where("uid", "==", user.uid).onSnapshot((query) => {
        const data: any = [];
        query.forEach((d) => {
          data.push({ ...d.data(), docId: d.id });
        });
        setTodos(data);
      });
    }

    return t;
  }, [user]);

  const add = useCallback(async (text: string) => {
    try {
      console.log(isLoading);
      console.log(user);

      if (user) {
        await collection
          .add({
            uid: user.uid,
            todo: text,
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
