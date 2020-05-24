import React, { useState } from "react";

// import api from "../../services/api";
// import { getJwt, getToken, login } from "../../services/auth";

import { ActionButton } from "../../styles/button";

import { Container, InputGroup } from "./styles";

import qrCodeIcon from "../../assets/icons/qrcode-icon.svg";

export default function AddTicket (props) {
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  
  function onClick() {
    setInfo("Carregando. Aguarde...");
    window.location.href = "/app";
  };

  return (
    <Container>
      <div className="qr-title">
        <h1>Bem-vindo ao TW!</h1>
      </div>
      <div>
        <p>adicione a senha ou o qrcode</p>
        <InputGroup>
          <input type="text" placeholder="ticket" />
          <button onClick={() => alert('qrcode')}>
            <img src={qrCodeIcon} alt="tw314 logo" />
          </button>
        </InputGroup>
        {error && <p className="error">{error}</p>}
        {info && <p className="info">{info}</p>}
        <ActionButton onClick={() => onClick()}>entrar na fila</ActionButton>
      </div>
      <div className="qr-links">
        <a href="/help">o que é um qrcode?</a><br />
        <a href="/help">onde encontro a senha?</a>
      </div>
    </Container>
  );
}
