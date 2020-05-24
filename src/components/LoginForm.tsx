import React from "react";
import GoogleLogin from "./GoogleLogin";
import styled from "styled-components/macro";
import { Button, Container, CssBaseline } from "@material-ui/core";

const Wrapper = styled.div`
  background: white
  max-width: 500px
`;

const LoginForm: React.FC = () => {
  return (
    <>
      <Container fixed>
        <CssBaseline />
        <GoogleLogin />
        {/*        <p>Sign in With Twitter</p>*/}
      </Container>
    </>
  );
};

export default LoginForm;
