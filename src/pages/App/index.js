import React, { Suspense } from "react";

import api from "../../services/api";
import {
  getTicket
} from "../../services/auth";
import { askPermissionNotifications } from '../../push-notification';

import { Container } from "./styles";

const Page  = React.lazy(() => import( "../../components/Page"));

const renderLoader = () => <i class="fas fa-spinner fa-spin"></i>;

export default function App () {
  const [ticketInfo, setTicketInfo] = React.useState(undefined);
  const [place, setPlace] = React.useState("");

  function getColors() {
    if (ticketInfo.position <= 5) {
      return "danger fas fa-hourglass-end"
    } else if (ticketInfo.position > 5 && ticketInfo.position <= 10) {
      return "warn fas fa-hourglass-half";
    } else if (ticketInfo.position > 10) {
      return "info fas fa-hourglass-start"
    }
  }

  React.useEffect(() => {
    askPermissionNotifications();

    api.get(`/tickets/${getTicket()}?&_expand=queue`).then(res => {
      setTicketInfo(res.data);
      api.get(`/places/${res.data.queue.placeId}`).then(res => setPlace(res.data.name)).catch(err => console.error(err))
    }).catch(err => console.error(err));
  }, []);
  
  return (
    <Suspense fallback={renderLoader()}>
      <Page>
        <Container>
          {ticketInfo ? (
            <React.Fragment>
              <div>
                <p className="ticket">
                  sua senha é: <span className="pass">{ticketInfo.ticket}</span>
                </p>
              </div>
              <div>
                <i className={`hourglass ${getColors()} `}></i>
                <p className="details">
                  <span className="message">ATENÇÃO</span> <br />
                  você está na <span className="people">{ticketInfo.position}ª posição</span> da fila <br/>
                  tempo estimado: <span className="time">{ticketInfo.waitingTime} min</span> <br />
                  local: <span className="place">{place}</span>
                </p>
              </div>
            </React.Fragment>
          ): <h3>não há nenhum ticket aguardado aqui! <br /><small>vá para <a href="/add-ticket">adicionar ticket</a> para acompanhar um</small></h3>}
        </Container>
      </Page>
    </Suspense>
  );
}
