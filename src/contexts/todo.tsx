import React, {
  createContext,
  useDebugValue,
  useState,
  useCallback,
  useMemo,
  useContext,
} from "react";
import { UserContext } from "./user";
import firebase from "../plugins/firebase";

const TodoContext = createContext(null);

const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);
  const { user } = useContext(UserContext);

  const collection = useMemo(() => {
    const todos = firebase.firestore().collection("todos");

    todos.where("uid", "==", user.uid).onSnapshot((query) => {
      const data = [];
      query.forEach((d) => data.push({ ...d.data(), docId: d.id }));
      setTodo(data);
    });

    return todos;
  }, []);

  const add = useCallback(async (text) => {
    try {
      await collection.add({
        id: user.uid,
        text,
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <TodoContext.Provider value={{ todo, add }}>
      {children}
    </TodoContext.Provider>
  );
};
