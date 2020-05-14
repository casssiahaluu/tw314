import React, { useState } from "react";

import jwt from 'jsonwebtoken';

import api from "../../services/api";
import { login } from "../../services/auth";

import { ActionButton } from "../../styles/button";

import { Form, Container } from "./styles";

import Logo from "../../assets/logo/logo_vertical.png";

function SignUp (props) {
  const [error, setError] = useState("");
  
  function onClick() {
    const token = jwt.sign({}, "tw314p@ssw0rd");

    api.post("/users", { token: token })
    .then(() => {
      login(token);
      props.history.push("/");
    })
    .catch(() => setError("Ops! Ocorreu um erro ao continuar T.T. Caso persista, entre em contato"));
  };

  return (
    <Container>
      <Form>
        <img src={Logo} height="250" alt="tw314 logo" />
        <p>
          para continuar usando nosso aplicativo você precisa aceitar nossos <a href="/#">termos de uso</a>.<br />
          deseja continuar?</p>
        <ActionButton onClick={() => onClick()}>aceitar e entrar</ActionButton>
        {error && <p className="error">{error}</p>}
      </Form>
    </Container>
  );
}

export default SignUp;
