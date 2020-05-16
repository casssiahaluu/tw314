import React, { useState } from "react";

import api from "../../services/api";
import { getJwt, getToken, login } from "../../services/auth";

import { ActionButton } from "../../styles/button";

import { Form, Container } from "./styles";

import Logo from "../../assets/logo/logo_vertical.png";

function SignUp (props) {
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  
  function onClick() {
    setInfo("Carregando. Aguarde...");

    if(getToken()) {
      window.location.href = "/app";
      console.log("Já existe token. Redirecionando para o App");
    } else {
      console.log("Não há token. Criando e redirecionando para o App");
      api.post("/users", {
        token: getJwt()
      }).then(response => {
        login(getJwt());
        window.location.href = "/app";
        console.log("Token criado com sucesso! \\o/ Bem-vindx, nerd!");
        setInfo("Feito! \\o/ Entrando no aplicativo");
      }).catch(() => setError("Ops! Ocorreu um erro ao continuar T.T. Caso persista, entre em contato"));
    }
  };

  return (
    <Container>
      <Form>
        <img src={Logo} height="250" alt="tw314 logo" />
        <p>
          para continuar usando nosso aplicativo você precisa aceitar nossos <a href="/#">termos de uso</a>.<br />
          deseja continuar?</p>
        <ActionButton onClick={() => onClick()}>aceitar e entrar</ActionButton>
        {info && <p>{info}</p>}
        {error && <p className="error">{error}</p>}
      </Form>
    </Container>
  );
}

export default SignUp;
