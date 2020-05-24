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
import firebase, { db } from "../plugins/firebase";
import { ITodo } from "../types/todo";

interface ITodoContext {
  todos: ITodo[];
  add: Function;
  remove: any;
  toggleComplete: any;
}

const TodoContext = createContext<ITodoContext>({
  todos: [],
  add: () => {},
  remove: () => {},
  toggleComplete: () => {},
});

const TodoProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const { user, isLoading } = useContext(UserContext);

  const collection = useMemo(() => {
    const t = db.collection("todos");

    // 最初はnullなので、チェック
    if (user?.uid) {
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
      if (user) {
        await collection
          .add({
            uid: user.uid,
            todo: text,
            isComplete: false,
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

  const toggleComplete: any = useCallback(
    async (docId: string) => {
      const todo = todos.find((t) => t.docId === docId);
      const setTo = {
        ...todo,
        isComplete: !todo?.isComplete,
      };
      try {
        await collection.doc(docId).update(setTo);
      } catch (e) {
        console.log(e);
      }
    },
    [todos]
  );

  const remove: any = useCallback(async (docId: string) => {
    try {
      collection.doc(docId).delete();
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <TodoContext.Provider value={{ todos, add, remove, toggleComplete }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
