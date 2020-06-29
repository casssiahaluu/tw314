import React from "react";
import api from "../../services/api";

import { getId, getTicket } from "../../services/auth";

import { Stars } from "./styles";

export default function RatingStars (props) {
  const [rating, setRating] = React.useState(0);
  const [hover, setHover] = React.useState(null);
  const [apiRating, setApiRating] = React.useState([]);

  const [info, setInfo] = React.useState("");
  const [error, setError] = React.useState("");

  function onRating (ratingValue) {
    setRating(ratingValue);
    
    if (apiRating.length <= 0) {
      api.post(`/ratings`, {
        stars: ratingValue,
        ticketId: parseInt(getTicket()),
        userId: parseInt(getId()),
      })
      .then(res => {
        props.getRatingId(res.data.id);
        
        setInfo("Adicionado");
        setError("");
      })
      .catch(() => {
        setInfo("");
        setError(
          "Não foi possível adicionar ao histórico. Tente mais tarde :("
        );
      });
    } else {
      api.patch(`/ratings/${apiRating.id}`, {
        stars: ratingValue
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
  }

  React.useEffect(() => {
    api.get(`/ratings?userId=${getId()}&ticketId=${getTicket()}`).then(res => {
      if (res.data.length > 0) {
        setApiRating(res.data[0]);
        setRating(res.data[0].stars)
      }
    }).catch(err => {
      console.error("Erro ao buscar avaliação anterior: ", err);
    })
  }, []);

  return (
    <Stars>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;

        return (
          <label key={`star${index}`}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => onRating(ratingValue)}
            />
            <i
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              className={`fa${
                ratingValue <= (hover || rating) ? "s" : "r"
              } fa-star`}
            />
          </label>
        );
      })}
      {info && <p className="info">{info}</p>}
      {error && <p className="error">{error}</p>}
    </Stars>
  );
};
