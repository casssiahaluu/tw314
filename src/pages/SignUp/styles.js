import styled from "styled-components";

import backgroundImage from "../../assets/images/background.png";
import {textColor} from "../../styles/colors";

export const Container = styled.div`
  height: 98vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${backgroundImage});
`;

export const Form = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    margin: 10px 0 40px;
  }

  p {
    padding: 10px;
    font-size: 1rem;
    text-align: center;
    margin-bottom: 15px;
    color: ${textColor};

    &.error{
      p {
        color: #ff3333;
        margin-bottom: 15px;
        border: 1px solid #ff3333;
        padding: 10px;
        width: 100%;
        text-align: center;
      }
    }
  }

  a {
    font-size: 16;
    font-weight: bold;
    color: #999;
    text-decoration: none;
  }
`;