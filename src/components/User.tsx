import React, { useContext } from "react";
import { UserContext } from "../contexts/user";

const User: React.FC = (props) => {
  const { user, signout } = useContext(UserContext);

  if (!user) {
    return <>test</>;
  } else {
    return (
      <>
        {user.displayName}
        <button onClick={signout as any}>サインアウト</button>
      </>
    );
  }
};

export default User;
