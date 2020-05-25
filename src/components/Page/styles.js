import styled from "styled-components";

import backgroundImage from "../../assets/images/backgroundFadder-min.jpg";
import {
  lightColor,
  darkColor,
  shadowColor
} from "../../styles/colors";

import {
  hoverColor
} from "../../styles/helpers";

export const Container = styled.div`
  height: 100vh;
  background-image: url(${backgroundImage});
`;

export const Nav = styled.nav`
  width: 100%;
  height: 4rem;
  display: flex;
  position: fixed;
  align-items: center;

  a {
    color: ${darkColor};
    
    ${hoverColor}
  }

  &.bottom {
    bottom: 0;
    font-size: 42px;
    text-align: center;
    justify-content: center;
    box-shadow: 0 0 6px ${shadowColor};
    background-color: ${lightColor};

    a {
      margin auto 20px;
  
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

    img, i { margin: auto 15px; }

    .menu {
      right: 15px;
      cursor: pointer;
      padding-left: 30px;
      position: absolute;

      ${hoverColor}
    }  
  }
`;

export const ContextMenu = styled.nav`
  right: 25px;
  font-weight: 700;
  font-size: 0.75rem;
  position: absolute;

  ul {
    z-index: 999;
    padding: 4px 15px;
    list-style-type: none;
    box-shadow: 0 0 6px ${shadowColor};
    background-color: ${lightColor};

    a {
      width: 100%;
      text-decoration: none;
      
      li {
        padding: 5px;
        margin: 2px auto;
        transition: color 0.15s ease-in-out;
        
        ${hoverColor}

        &.feedback {
          border-top: 1px solid #5e434330;
          border-bottom: 1px solid #5e434330;
        }
      }
    }
  }
`;
