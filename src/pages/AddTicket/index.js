import React, { useState } from "react";

import api from "../../services/api";
import {
  getId,
  setTicket
} from "../../services/auth";

import { ActionButton } from "../../styles/button";

import { Container, InputGroup } from "./styles";

import qrCodeIcon from "../../assets/icons/qrcode-icon.svg";

export default function AddTicket () {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  
  function onClick() {
    setError("")
    setInfo("Carregando. Aguarde...");
    if(value) {
      api.get(`/tickets?ticket=${value}&userId=${getId()}&status=waiting`).then(res => {
        if (res.data.length > 0) {
          setTicket(res.data[0].id);
          setError("");
          setInfo("Entrando no app...");
          window.location.href = "/app";
        } else {
          setError(`Eita! Esse ticket não foi encontrado no nosso sistema
          ou não é vinculado a esse usuário :(`);
          setInfo("");
        }
      })
    } else {
      setError("Opa! O campo está em branco o.O")
      setInfo("");
    }
    
  };

  return (
    <Container>
      <div className="qr-title">
        <h1>Bem-vindo ao TW!</h1>
      </div>
      <div>
        <p>adicione a senha ou o qrcode</p>
        <InputGroup>
          <input type="text" placeholder="ticket" value={value} onChange={event => setValue(event.target.value)}/>
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
