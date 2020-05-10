import React, { useContext } from "react";
import { UserProvider, UserContext } from "../contexts/user";
import { TodoProvider } from "../contexts/todo";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import User from "./User";
import GoogleLogin from "./GoogleLogin";
import Loading from "./Loading";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  & {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: whitesmoke;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
  }
`;

const Main: React.FC = (props) => {
  const { isLoading, user } = useContext(UserContext);

  return (
    <Wrapper>
      {isLoading ? (
        <Loading />
      ) : user ? (
        <TodoProvider>
          <TodoForm />
          <TodoList />
          <User />
        </TodoProvider>
      ) : (
        <GoogleLogin />
      )}
    </Wrapper>
  );
};

export default Main;
