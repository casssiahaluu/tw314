import React from "react";

import Page from "../../components/Page";
import { Container, ResponsiveImg } from "./styles";

import Logo from "../../assets/logo/logo_vertical.png";

export default function App () {
  return (
    <Page>
      <Container>
        <div>
          <p className="ticket">
            sua senha é: <span className="pass">TW314</span>
          </p>
        </div>
        <div>
          <i class="hourglass warn fas fa-hourglass-half"></i>
          <p className="details">
            <span className="message">ATENÇÃO</span> <br />
            há <span className="people">5</span> pessoas na sua frente <br/>
            tempo estimado: <span className="time">30 min</span> <br />
            local: <span className="place">meu banco</span>
          </p>
        </div>
      </Container>
    </Page>
  );
}
