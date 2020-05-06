import React, { createContext, useState, useEffect, useCallback } from "react";
import firebase from "../plugins/firebase";

interface IUser {
  user: firebase.User | null | undefined;
  isLoading: boolean;
  signout: Function;
}

const UserContext = createContext<IUser>({
  user: undefined,
  isLoading: true,
  signout: () => {},
});

const UserProvider: React.FC = ({ children }) => {
  // user情報をセットするためのstateを準備
  const [user, setUser] = useState<firebase.User | null | undefined>(undefined);
  const [isLoading, setLoading] = useState<boolean>(true);

  const signout = useCallback(async () => {
    try {
      setLoading(true);
      await firebase.auth().signOut();
    } catch (e) {
      console.error(e.code, e.message);
    }
  }, []);
  // 認証済みユーザかどうかをチェックする。
  //
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
      console.log("setUser");
    });

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={{ user, isLoading, signout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
