import React, { useContext } from "react";
import { UserContext } from "../contexts/user";

const User: React.FC = (props) => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <>test</>;
  } else {
    return <>{user.displayName}</>;
  }
};

export default User;
