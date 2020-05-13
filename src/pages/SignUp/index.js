import React, { useState } from "react";

import jwt from 'jsonwebtoken';

import api from "../../services/api";
import { login } from "../../services/auth";

import { ActionButton } from "../../styles/button";

import { Form, Container } from "./styles";

import Logo from "../../assets/logo/icon_logo.png";

function SignUp (props) {
  const [error, setError] = useState("");
  
  function handleSignUp() {
    const token = jwt.sign({}, "tw314p@ssw0rd");

    try {
      api.post("/users", { token: token }).then();
      login(token);
      props.history.push("/");
    } catch(err) {
      console.log(err);
      setError("Ocorreu um erro ao registrar seu token T.T");
    }
  };

  return (
    <Container>
      <Form>
        <img src={Logo} height="200" alt="tw314 logo" />
        {error && <p>{error}</p>}

        <ActionButton onClick={() => handleSignUp()}>Cadastrar grátis</ActionButton>
        <hr />
      </Form>
    </Container>
  );
}

export default SignUp;
