import React from "react";

import api from "../../services/api";
import { getId, getTicket } from "../../services/auth";
import Modal from "../Modal";

import { Container, ContextMenu, Nav } from "./styles";

import Logo from "../../assets/logo/logo_horizontal.png";

export default function Page (props) {
  const [menu, toggleMenu] = React.useState(false);
  const [modalLeave, toggleModalLeave] = React.useState(false);
  const [modalStars, toggleModalStars] = React.useState(false);
  const [modalHistoric, toggleModalHistoric] = React.useState(false);


  const [info, setInfo] = React.useState("");
  const [error, setError] = React.useState("");
  const [ticketInfo, setTicketInfo] = React.useState("");
  const [rating, setRating] = React.useState();

  const configLeave = {
    labelClose: "não",
    labelAction: "sim",
    action: () => exitQueue(),
  };

  const configHistoric = {
    labelClose: "não",
    labelAction: "sim",
    action: () => addHistoric(),
  };

  function exitQueue() {
    setInfo("");
    setError("");

    api.patch(`/tickets/${getTicket()}`, {status: "canceled"}).then(() => {
      window.location.href = "/add-ticket";
      setInfo("saindo da fila...");
      setError("");
    }).catch(() => {
      setInfo("");
      setError(`Não foi possível vincular esse ticket a você. Tente mais tarde :(`);
    })
  }

  function addHistoric() {
    setInfo("");
    setError("");

    api
      .post(`/historics`, {
        ratingId: rating ? rating.id : 0,
        ticketId: parseInt(getTicket()),
        placeId: ticketInfo.queue.placeId,
        userId: parseInt(getId())
      })
      .then(() => {
        setInfo("Adicionado");
        setError("");
        toggleModalHistoric(false);
      })
      .catch(() => {
        setInfo("");
        setError(
          `Não foi possível adicionar ao histórico. Tente mais tarde :(`
        );
      });
  }

  function onRating(ratingValue) {
    setRating(ratingValue);

    api.get(`/ratings?userId=${getId()}`).then((res) => {
      console.log();
    });
    api
      .post(`/ratings`, {
        stars: rating || 0,
        ticketId: parseInt(getTicket()),
        userId: parseInt(getId()),
      })
      .then(() => {
        setInfo("Adicionado");
        setError("");
      })
      .catch(() => {
        setInfo("");
        setError(
          "Não foi possível adicionar ao histórico. Tente mais tarde :("
        );
      });
  }

  React.useEffect(() => {
    api
      .get(`/tickets/${getTicket()}?&_expand=queue`)
      .then((res) => {
        setTicketInfo(res.data);
        console.log(res.data);
        
      })
      .catch((err) => console.error(err));
  }, []);

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
        <a href="/app" title="Home">
          <i className="fas fa-home"></i>
        </a>
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
          type="danger"
          isOpen={modalLeave}
          actionButton={configLeave}
          onClose={toggleModalLeave}
        >
          <div className="box-body">
            Se você continuar, sairá da fila. É isso mesmo?
            {error && <p className="error">{error}</p>}
            {info && <p className="info">{info}</p>}
          </div>
        </Modal>
      )}
      {modalStars && (
        <Modal
          type="rating"
          title="avaliar"
          id="modal-rating"
          icon="fas fa-star"
          isOpen={modalStars}
          onClose={toggleModalStars}
          onRating={onRating}
          // actionButton={}
        >
          <div className="box-body">
            Avalie seu tempo de espera e atendimento
            {error && <p className="error">{error}</p>}
            {info && <p className="info">{info}</p>}
          </div>
        </Modal>
      )}
      {modalHistoric && (
        <Modal
          type="success"
          icon="fas fa-clock"
          id="modal-add-historic"
          title="adicionar ao histórico"
          isOpen={modalHistoric}
          actionButton={configHistoric}
          onClose={toggleModalHistoric}
        >
          <div className="box-body">
            gostaria de adicionar ess ticket ao histórico?
            {error && <p className="error">{error}</p>}
            {info && <p className="info">{info}</p>}
          </div>
        </Modal>
      )}
    </Container>
  );
};
