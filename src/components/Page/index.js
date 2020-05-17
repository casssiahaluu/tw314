import React from "react";

import { Container, ContextMenu, Nav } from "./styles";

import Logo from "../../assets/logo/logo_horizontal.png";

export default function Page (props) {
  const [menu, toggleMenu] = React.useState(false);

  function onClick() {
    toggleMenu(!menu);
  }

  return (
    <Container>
      <Nav className="top">
        {props.title ? (
          <React.Fragment>
            <a href="/app" title="voltar para home">
              <i className="fas fa-arrow-left"></i>
            </a>
            <span>{props.title}</span>
          </React.Fragment>
        ) : (
          <img src={Logo} height="32" alt="tw314 logo" />
        )}
        <div className="menu" title="menu" onClick={() => onClick()}>
          <i className="fas fa-ellipsis-v"></i>
          {menu && <ContextMenu>
            <ul>
              <a href="/help"><li>ajuda</li></a>
              <a href="mailto:haluanedecassia@gmail.com"><li className="feedback">feedback</li></a>
              <a href="/about"><li>sobre</li></a>
            </ul>
          </ContextMenu>}
        </div>
      </Nav>
      {props.children}
      <Nav className="bottom">
        <a href="/#" title="sair da file">
          <i className="fas fa-times"></i>
        </a>
        <a href="/#" title="avaliar local">
          <i className="fas fa-star"></i>
        </a>
        <a href="/#" title="adicionar ao histórico">
          <i className="far fa-check-circle"></i>
        </a>
        <a href="/#" title="ver histórico">
          <i className="far fa-clock"></i>
        </a>
      </Nav>
    </Container>
  );
};
