import styled from "styled-components";

import backgroundImage from "../../assets/images/backgroundFadder-min.jpg";
import {
  darkTextColor, 
  errorTextColor, 
  linkTextColor,
  bgDefaultPage,
  shadowColor
} from "../../styles/colors";

export const Container = styled.div`
  height: 98vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${backgroundImage});
`;

export const Nav = styled.nav`
  width: 100%;
  height: 4rem;
  display: flex;
  position: fixed;
  align-items: center;
  color: ${darkTextColor};

  &.bottom {
    bottom: 0;
    font-size: 42px;
    text-align: center;
    justify-content: center;
    box-shadow: 0 0 6px ${shadowColor};
    background-color: ${bgDefaultPage};

    a {
      margin auto 20px;
      color: ${darkTextColor};
  
      .fa-times {
        font-size: 52px;
      }
    }
  }

  &.top {
    top: 0;
    padding: 0 10px;
    font-size: 30px;
    box-shadow: 0 0 -6px ${shadowColor};

    span {
      font-size: 1.2rem;
    }

    img { margin: auto 15px; }

    i {
      margin: auto 15px;

      &.fa-ellipsis-v {
        right: 15px;
        position: absolute;
      }
      
      .fa-arrow-left {

      }
    }


    
  }
`;

export const NavTop = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
`;


export const P = styled.p`
  p {
    font-size: 1rem;
    text-align: center;
    margin-bottom: 15px;
    color: ${darkTextColor};

    &.error{
      font-size: 0.85rem;
      text-align: center;
      color: ${errorTextColor};
    }
  }
`;

export const Form = styled.div`
  display: flex;
  max-width: 400px;
  align-items: center;
  flex-direction: column;

  img {
    margin: 10px 0 15px;
  }

  p {
    font-size: 1rem;
    text-align: center;
    margin-bottom: 15px;
    color: ${darkTextColor};

    &.error{
      font-size: 0.85rem;
      text-align: center;
      color: ${errorTextColor};
    }
  }

  a {
    font-size: 1rem;
    color: ${linkTextColor};
    text-decoration: underline;

    &:hover {
      color: darken(10%, ${linkTextColor});
    }
  }
`;