import React, { useState, Suspense } from "react";

import api from "../../services/api";
import {
  getJwt,
  getToken,
  login,
  setId
} from "../../services/auth";

import { ActionButton } from "../../styles/button";

import { Form, Container } from "./styles";

import Logo from "../../assets/logo/logo_vertical.png";

const renderLoader = () => <i class="fas fa-spinner fa-spin"></i>;

function SignUp (props) {
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");

  function redirect() {
    window.location.href = "/add-ticket";
  }
  
  function onClick() {
    setInfo("Carregando. Aguarde...");

    if(getToken()) {
      console.log("Já existe token. Redirecionando para o App");
      redirect();
    } else {
      console.log("Não há token. Criando e redirecionando para o App");
      api.post("/users", {
        token: getJwt()
      }).then(res => {
        login(getJwt());
        setId(res.data.id);
        console.log("Token criado com sucesso! \\o/ Bem-vindx, nerd!");
        setInfo("Feito! \\o/ Entrando no aplicativo");
        redirect();
      }).catch(() => {
        setInfo("");
        setError("Ops! Ocorreu um erro ao continuar T.T. Caso persista, entre em contato")
      });
    }
  };

  return (
    <Suspense fallback={renderLoader()}>
      <Container>
        <Form>
          <img src={Logo} height="250" alt="logo de app tw314" />
          <h2 className="info">
            para continuar usando nosso aplicativo você precisa aceitar nossos <a href="/#">termos de uso</a>.<br />
            deseja continuar?</h2>
          <ActionButton onClick={() => onClick()}>aceitar e entrar</ActionButton>
          {info && <p className="info">{info}</p>}
          {error && <p className="error">{error}</p>}
        </Form>
      </Container>
    </Suspense>
  );
}

export default SignUp;
