import React from "react";

import { Container, Nav } from "./styles";

import Logo from "../../assets/logo/logo_horizontal.png";

export default function Page (props) {
  return (
    <Container>
      <Nav className="top">
        {props.title ? (
          <React.Fragment><i class="fas fa-arrow-left"></i> <span>{props.title}</span></React.Fragment>
        ) : (
          <img src={Logo} height="32" alt="tw314 logo" />
        )}
        <i class="fas fa-ellipsis-v"></i>
      </Nav>
      {props.children}
      <Nav className="bottom">
        <a href="/#">
          <i class="fas fa-times"></i>
        </a>
        <a href="/#">
          <i class="fas fa-star"></i>
        </a>
        <a href="/#">
          <i class="far fa-check-circle"></i>
        </a>
        <a href="/#">
          <i class="far fa-clock"></i>
        </a>
      </Nav>
    </Container>
  );
};
