import React from "react";


import Modal from "../Modal";

import { Container, ContextMenu, Nav } from "./styles";

import Logo from "../../assets/logo/logo_horizontal.png";

export default function Page (props) {
  const [menu, toggleMenu] = React.useState(false);
  const [modalLeave, toggleModalLeave] = React.useState(false);
  const [modalStars, toggleModalStars] = React.useState(false);
  const [modalHistoric, toggleModalHistoric] = React.useState(false);

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
        <div className="menu" title="menu" onClick={() => toggleMenu(!menu)}>
          <i className="fas fa-ellipsis-v"></i>
          {menu && (
            <ContextMenu>
              <ul>
                <a href="/help">
                  <li>ajuda</li>
                </a>
                <a href="mailto:haluanedecassia@gmail.com">
                  <li className="feedback">feedback</li>
                </a>
                <a href="/about">
                  <li>sobre</li>
                </a>
              </ul>
            </ContextMenu>
          )}
        </div>
      </Nav>
      {props.children}
      <Nav className="bottom">
        <button
          onClick={() => toggleModalLeave(!modalLeave)}
          title="sair da file"
        >
          <i className="fas fa-times"></i>
        </button>
        <button
          onClick={() => toggleModalStars(!modalStars)}
          title="avaliar local"
        >
          <i className="fas fa-star"></i>
        </button>
        <button
          onClick={() => toggleModalHistoric(!modalHistoric)}
          title="adicionar ao histórico"
        >
          <i className="far fa-check-circle"></i>
        </button>
        <a href="/historic" title="ver histórico">
          <i className="far fa-clock"></i>
        </a>
      </Nav>
      {modalLeave && (
        <Modal
          id="modal-leave"
          title="sair da fila"
          icon="fas fa-times"
          isOpen={modalLeave}
          onClose={toggleModalLeave}
        >
          <div className="box-body">
            Se você continuar, sairá da fila. É isso mesmo?
          </div>
        </Modal>
      )}
      {modalStars && (
        <Modal
          id="modal-rating"
          title="avaliar"
          isOpen={modalStars}
          onClose={toggleModalStars}
        >
          <div className="box-body">
            Avalie seu tempo de espera e atendimento
          </div>
        </Modal>
      )}
      {modalHistoric && (
        <Modal
          id="modal-add-historic"
          title="adicionar ao histórico"
          isOpen={modalHistoric}
          onClose={toggleModalHistoric}
        >
          <div className="box-body">historico</div>
        </Modal>
      )}
    </Container>
  );
};
