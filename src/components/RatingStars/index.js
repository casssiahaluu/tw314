import React from "react";
import api from "../../services/api";

import { getId, getTicket } from "../../services/auth";

import { Stars } from "./styles";

export default function RatingStars () {
  const [rating, setRating] = React.useState(0);
  const [hover, setHover] = React.useState(null);

  const [info, setInfo] = React.useState("");
  const [error, setError] = React.useState("");

  function onRating (ratingValue) {
    setRating(ratingValue);
    
    api.get(`/ratings?userId=${getId()}&ticketId=${getTicket()}`).then(res => {
      console.log(res.data);
    })
    // api
    //   .post(`/ratings`, {
    //     stars: ratingValue,
    //     ticketId: parseInt(getTicket()),
    //     userId: parseInt(getId()),
    //   })
    //   .then(() => {
    //     setInfo("Adicionado");
    //     setError("");
    //   })
    //   .catch(() => {
    //     setInfo("");
    //     setError(
    //       "Não foi possível adicionar ao histórico. Tente mais tarde :("
    //     );
    //   });
  }

  return (
    <Stars>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;

        return (
          <label>
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
