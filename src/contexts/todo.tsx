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
  const [todos, setTodo] = useState<ITodo[]>([]);
  const { user } = useContext(UserContext);

  const collection = useMemo(() => {
    const todos = firebase.firestore().collection("todos");
    console.log("collection" + user?.uid);

    todos.where("uid", "==", user?.uid).onSnapshot((query) => {
      console.log("todos where ");
      const data: any = [];
      query.forEach((d) => data.push({ ...d.data(), docId: d.id }));
      setTodo(data);
    });

    return todos;
  }, []);

  const add = useCallback(async (text: string) => {
    try {
      await collection.add({
        uid: user?.uid,
        todo: text,
        isCompelte: false,
        created_at: new Date(),
      });
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
