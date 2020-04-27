import React, { createContext, useState, useEffect } from "react";
import firebase from "../plugins/firebase";

interface IUser {
  user: firebase.User | null | undefined;
}

const UserContext = createContext<IUser>({ user: undefined });

const UserProvider: React.FC = ({ children }) => {
  // user情報をセットするためのstateを準備
  const [user, setUser] = useState<firebase.User | null | undefined>(undefined);

  // 認証済みユーザかどうかをチェックする。
  //
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      console.log(user);
    });

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserProvider };
