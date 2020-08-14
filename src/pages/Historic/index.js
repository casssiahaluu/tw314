import React, { Suspense } from "react";

import api from "../../services/api";
import {
  getId
} from "../../services/auth";

import { Any, Container, Item } from "./styles";

const Page = React.lazy(() => import("../../components/Page"));

const renderLoader = () => <i class="fas fa-spinner fa-spin"></i>;

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
    <Suspense fallback={renderLoader()}>
      <Page title="histórico">
        <Container>
          {historic.length > 0 ? (
            historic.map((log, i) => (
              <Item key={`historic_${i}`}>
                <h2 className="historic-date">{getDate(log.createdAt)}</h2>
                <div className="historic-details">
                  <div className="infos">
                    <h3 className="infos-details">
                      <i className="fas fa-map-marker-alt"></i>
                      local: <span>{log.place.name}</span>
                    </h3>
                    <h3 className="infos-details">
                      <i className="fas fa-hourglass-half"></i>
                      <span>{log.place.averageTime} min</span> de espera
                    </h3>
                  </div>
                  <div className="stars">
                    {log.rating ? getStars(log.rating.stars) : "não avaliado"}
                  </div>
                </div>
              </Item>
            ))
          ) : (
            <Any>
              Parece que não tem nenhum histórico aqui! Mas tá tudo certo, só
              adicionar algum enquanto estiver na fila que vai aparecer{" "}
              <span role="img" aria-label="emoji piscando">
                &#128521;
              </span>
            </Any>
          )}
        </Container>
      </Page>
    </Suspense>
  );
}
