import React from "react";
import api from "../../services/api";
import {
  getId
} from "../../services/auth";

import Page from "../../components/Page";
import { Any, Container, Item } from "./styles";

export default function Historic () {
  const [historic, setHistoric] = React.useState([]);
  
  function getStars(star) {
    let stars = [];

    for (let i=1; i<=5; i++){
      if (i <= star) stars.push(<i className="fas fa-star"></i>);
      else stars.push(<i className="far fa-star"></i>);
    }

    return stars;
  }

  function getDate(date) {
    const newDate = new Date(date);

    const options = {
      year: "numeric",
      month: "2-digit",
      day: "numeric"
    };

    return newDate.toLocaleString('pt-BR', options);
  }

  React.useEffect(() => {
    getStars();
    api.get(`/historics?userId=${getId()}&_expand=rating&_expand=place`).then(res => {
      setHistoric(res.data);
      console.log(res.data);
      
    }).catch(error => console.log(error));
  }, []);
  
  return (
    <Page title="histórico">
      <Container>
        {historic.length > 0 ? historic.map((log, i) => ( 
          <Item key={`historic_${i}`}>
            <div className="historic-date">
              {getDate(log.createdAt)}
            </div>
            <div className="historic-details">
              <div className="infos">
                <p>
                  <i className="fas fa-map-marker-alt"></i> 
                  local: <span>{log.place.name}</span></p>
                <p>
                  <i className="fas fa-hourglass-half"></i> 
                  <span>{log.place.averageTime} min</span> de espera
                </p>
              </div>
              <div className="stars">
                {getStars(log.rating.stars)}
              </div>
            </div>
          </Item>
        )) : <Any>Eita! Parece que não tem nenhum histórico aqui! Mas tá tudo certo, só  adicionar algum enquanto estiver na fila que vai aparecer aqui <span role="img" aria-label="emoji piscando">&#128521;</span></Any>}
      </Container>
    </Page>
  );
}
