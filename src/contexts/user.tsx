import React, { createContext, useState, useEffect } from "react";
import firebase from "../plugins/firebase";

interface IUser {
  user: firebase.User | null | undefined;
  isLoading: boolean;
}

const UserContext = createContext<IUser>({ user: undefined, isLoading: true });

const UserProvider: React.FC = ({ children }) => {
  // user情報をセットするためのstateを準備
  const [user, setUser] = useState<firebase.User | null | undefined>(undefined);
  const [isLoading, setLoading] = useState<boolean>(true);

  // 認証済みユーザかどうかをチェックする。
  //
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
      console.log("setUser");
    });

    return unsubscribe;
  }, [setLoading]);

  return (
    <UserContext.Provider value={{ user, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
