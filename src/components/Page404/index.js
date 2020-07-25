import React, { Suspense } from "react";

import { ActionButton } from "../../styles/button";

import { Container } from "./styles";
import yoda from "../../assets/images/yoda404.png";
import logo from "../../assets/logo/icon_logo.png";

const renderLoader = () => <i className="fas fa-spinner fa-spin"></i>;

export default function Page404 () {
  return (
    <Suspense fallback={renderLoader}>
      <Container>
        <div>
          <h1>404</h1>
        </div>
        <div>
          <img className="logo" src={logo} alt="Logo tw314" />
          <p>
            Encontrada a página não foi. <br />
            Voltar ao app você pode.
          </p>
          <ActionButton onClick={() => window.location.href = "/app"}>voltar ao app</ActionButton>
        </div>
        <div>
          <img src={yoda} alt="yoda" />
        </div>
      </Container>
    </Suspense>
  );
};
