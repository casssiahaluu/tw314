import React from "react";
import api from "../../services/api";

import Page from "../../components/Page";
import { Container, Item } from "./styles";

export default function Historic () {
  const [historic, setHistoric] = React.useState([]);
  const [place, setPlace] = React.useState([]);

  React.useEffect(() => {
    api.get("/historics?&_expand=rating").then(response => {
      setHistoric(response.data);
    }).catch(error => console.log(error));
  }, []);
  
  return (
    <Page title="histórico">
      <Container>
        {historic ? historic.map((log, i) => ( 
          <Item key={`historic_${i}`}>
            <div className="historic-date">
              {log.createdAt}
            </div>
            <div className="historic-details">
              <div className="infos">
                <p>
                  <i className="fas fa-map-marker-alt"></i> 
                  local: <span>{log.rating.placeName}</span></p>
                <p>
                  <i className="fas fa-hourglass-half"></i> 
                  <span>{log.rating.placeAverageTime} min</span> de espera
                </p>
              </div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i> 
              </div>
            </div>
          </Item>
        )) : "else"}
      </Container>
    </Page>
  );
}
