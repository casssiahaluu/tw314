import React, { Suspense } from "react";

import api from "../../services/api";
import { getId, getTicket } from "../../services/auth";

import { Container, ContextMenu, Nav } from "./styles";

import Logo from "../../assets/logo/logo_horizontal.png";

const Modal = React.lazy(() => import('../Modal'));

const renderLoader = () => <i className="fas fa-spinner fa-spin"></i>;

export default function Page (props) {
  const [menu, toggleMenu] = React.useState(false);
  const [modalLeave, toggleModalLeave] = React.useState(false);
  const [modalStars, toggleModalStars] = React.useState(false);
  const [modalHistoric, toggleModalHistoric] = React.useState(false);

  const [info, setInfo] = React.useState("");
  const [error, setError] = React.useState("");
  const [ticketInfo, setTicketInfo] = React.useState("");
  const [rating, setRating] = React.useState(0);
  const [historic, setHistoric] = React.useState([]);

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

  function getRatingId(id) {
    setRating(id);

    api.get(`/historic?userId=${getId()}&ticketId=${getTicket()}`)
    .then((res) => {
      if (res.data.length > 0) {
        
      }
    })
    .catch((err) => {
      console.error("Erro ao buscar avaliação anterior: ", err);
    });
  }

  function addHistoric() {
    setInfo("");
    setError("");

    if(historic.length <= 0) {
      api.post(`/historics`, {
        ratingId: rating,
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
  }

  React.useEffect(() => {
    api.get(`/tickets/${getTicket()}?&_expand=queue`)
    .then((res) => {
      setTicketInfo(res.data);        
    })
    .catch((err) => console.error("Erro ao buscar ticket", err));

    api.get(`/historics?userId=${getId()}&ticketId=${getTicket()}`)
    .then((res) => {
      if (res.data.length > 0) {
        setHistoric(res.data[0])
      }
    })
    .catch((err) => {
      console.error("Erro ao buscar histórico", err);
    });
  }, []);

  return (
    <Suspense fallback={renderLoader()}>
      <Container>
        <Nav className="top">
          {props.title ? (
            <React.Fragment>
              <a href="/app" title="voltar para home" aria-label="voltar para home">
                <i className="fas fa-arrow-left"></i>
              </a>
              <h1 className='page-title'>{props.title}</h1>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <h1 aria-hidden="false" hidden='true'>tw314</h1>
              <img src={Logo} height="32" alt="tw314 logo" />
            </React.Fragment>
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
            aria-label="sair da fila"
          >
            <i className="fas fa-times"></i>
          </button>
          <button
            onClick={() => toggleModalStars(!modalStars)}
            title="avaliar local"
            aria-label="avaliar local"
          >
            <i className="fas fa-star"></i>
          </button>
          <a href="/" title="Home" aria-label="Home">
            <i className="fas fa-home"></i>
          </a>
          <button
            onClick={() => toggleModalHistoric(!modalHistoric)}
            title="adicionar ao histórico"
            aria-label="adicionar ao histórico"
          >
            <i className="far fa-check-circle"></i>
          </button>
          <a href="/historic" aria-label="ver histórico" title="ver histórico">
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
            getRatingId={getRatingId}
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
            actionButton={historic.length > 0 ? undefined : configHistoric}
            onClose={toggleModalHistoric}
          >
            <div className="box-body">
              {historic.length > 0 ? (
                <span>
                  já existe um histórico para esse ticket <span role="img" aria-label="piscando e mostrando a linguinha">&#128540;</span>
                </span>
              ) : (
                "gostaria de adicionar ess ticket ao histórico?"
              )}
              {error && <p className="error">{error}</p>}
              {info && <p className="info">{info}</p>}
            </div>
          </Modal>
        )}
      </Container>
    </Suspense>
  );
};
