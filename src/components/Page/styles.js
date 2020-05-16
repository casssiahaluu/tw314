import styled from "styled-components";

import backgroundImage from "../../assets/images/backgroundFadder-min.jpg";
import {
  bgDefaultPage,
  darkTextColor,
  shadowColor
} from "../../styles/colors";

import {
  centeredElement
} from "../../styles/helpers";

export const Container = styled.div`
  height: 100vh;
  ${centeredElement}
  background-image: url(${backgroundImage});
`;

export const Nav = styled.nav`
  width: 100%;
  height: 4rem;
  display: flex;
  position: fixed;
  align-items: center;
  color: ${darkTextColor};

  a {
    color: ${darkTextColor};
  }

  &.bottom {
    bottom: 0;
    font-size: 42px;
    text-align: center;
    justify-content: center;
    box-shadow: 0 0 6px ${shadowColor};
    background-color: ${bgDefaultPage};

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
    }  
  }
`;

export const ContextMenu = styled.nav`
  right: 25px;
  font-weight: 700;
  font-size: 0.75rem;
  position: absolute;

  ul {
    padding: 4px 15px;
    list-style-type: none;
    box-shadow: 0 0 6px ${shadowColor};
    background-color: ${bgDefaultPage};

    a {
      width: 100%;
      text-decoration: none;
      
      li {
        padding: 5px;
        margin: 2px auto;
        
        &:hover {
          color: #F2913D;
          background-color: #FFFAE9;
        }

        &.feedback {
          border-top: 1px solid #5e434330;
          border-bottom: 1px solid #5e434330;
        }
      }
    }
  }
`;
