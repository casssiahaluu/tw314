import React, { useState, Suspense } from "react";

import api from "../../services/api";
import {
  getId,
  setTicket
} from "../../services/auth";

import { ActionButton } from "../../styles/button";

import { Container, InputGroup } from "./styles";
// import qrCodeIcon from "../../assets/icons/qrcode-icon.svg";

const renderLoader = () => <i class="fas fa-spinner fa-spin"></i>;

export default function AddTicket () {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  
  function onClick() {
    setError("")
    setInfo("Carregando. Aguarde...");
    if(value) {
      api.get(`/tickets?ticket=${value}&status!=done`).then(res => {
        if (res.data.length > 0) {
          setTicket(res.data[0].id);
          setError("");
          if (res.data[0].id === getId()) {
            if(res.data[0].status === "waiting") {
              setInfo("Entrando no app...");
              window.location.href = "/app";
            } else {
              setError(
                `Esse ticket foi removido da fila! o.O`
              );
              setInfo("");
            }
          } else {
            api.patch(`/tickets/${res.data[0].id}`, {userId: getId(), status: "waiting"}).then(() => {
              setInfo("Entrando no app...");
              window.location.href = "/app";
            }).catch(() => {
              setInfo("");
              setError(`Não foi possível vincular esse ticket a você. Tente mais tarde :(`);
            })
          }
        } else {
          setError(`Eita! Esse ticket não foi encontrado ou já foi concluído :(`);
          setInfo("");
        }
      })
    } else {
      setError("Opa! O campo está em branco o.O")
      setInfo("");
    }
  };

  return (
    <Suspense fallback={() => renderLoader()}>
      <Container>
        <div className="qr-title">
          <h2>Bem-vindo ao TW!</h2>
        </div>
        <div>
          <label if="label-add-code" for="add-code">
            adicione a senha ou o qrcode
          </label>
          <InputGroup>
            <input 
              id="add-code" 
              type="text" 
              placeholder="ticket"
              value={value} 
              onChange={event => setValue(event.target.value)}
            />
            {/* <button onClick={() => alert('qrcode')}>
              <img src={qrCodeIcon} alt="botão de qrcode" />
            </button> */}
          </InputGroup>
          {error && <p className="error">{error}</p>}
          {info && <p className="info">{info}</p>}
          <ActionButton onClick={() => onClick()}>entrar na fila</ActionButton>
        </div>
        <div className="qr-links">
          <a href="/help">
            o que é um qrcode? <br />
            onde encontro a senha?
          </a>
        </div>
      </Container>
    </Suspense>
  );
}
