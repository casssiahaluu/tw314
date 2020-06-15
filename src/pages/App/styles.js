import styled from "styled-components";

import { centeredElement } from "../../styles/helpers";
import { contrastTextColor, contrastMessageTextColor, contrastPeopleTextColor, contrastTimeTextColor, contrastPlaceTextColor } from "../../styles/colors";

export const Container = styled.div`
  ${centeredElement}
  height: 100%;
  flex-wrap: wrap;
  text-align:  center;
  flex-direction: column;
  div {
    .hourglass {
      margin: 25px auto;
      font-size: 12rem;
      -webkit-text-fill-color: transparent;
      
      &.danger {
        background: linear-gradient(to right, #C80B47, #f75287);
        -webkit-background-clip: text;
      }

      &.warn {
        background: linear-gradient(to right, #FFD500, #BB7D11);
        -webkit-background-clip: text;
      }

      &.info {
        background: linear-gradient(to right, #1A9F1A, #92ff92);
        -webkit-background-clip: text;
      }
    }

    .ticket {
      font-size: 1.3rem;

      .pass {
        font-weight: 700;
        font-style: underline;
        color: ${contrastTextColor};
      }
    }

    .details {
      span {
        font-weight: 700;
      }

      .message {
        font-size: 1..08rem;
        color: ${contrastMessageTextColor};
      }

      .people {
        color: ${contrastPeopleTextColor};
      }

      .time {color: ${contrastTimeTextColor};}

      .place {color: ${contrastPlaceTextColor};}
    }
  }
`;

export const ResponsiveImg = styled.img`
  width: 100%;
  height: auto;
  max-width: 235px;
`;