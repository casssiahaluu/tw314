import styled from "styled-components";

import {
  borderColor,
  blockElement
} from "../../styles/helpers";

import {
  contrastTextColor,
  starsIconColor
} from "../../styles/colors";

export const Container = styled.div`
  ${blockElement}
  width: 100%;
  margin: 0 auto;
`;

export const Any = styled.h1`
  margin: 15px;
  font-size: 1rem;
  text-align: center;
`;

export const Item = styled.div`
  padding: 15px 20px;
  border-top: ${borderColor};
  background-color: #ebebeb82;


  .historic-date {
    font-weight: 700;
    font-size: 1.15rem;
    position: relative;
    padding-right: 30px;
  }

  .historic-details {
    display: flex;
    align-items: center;
    font-size: 0.8rem;

    .infos {
      width: 140%;

      .infos-details {
        font-size: 0.90rem;
        margin: 5px auto;

        i { margin-right: 10px; }

        span {
          font-weight: 600;
          color: ${contrastTextColor};
        }
      }
    }

    .stars {
      width: 100%;
      display: flex;
      font-size: 1rem;
      justify-content: end;
      color: ${starsIconColor};
    }
  } 
  
`;