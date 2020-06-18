import styled from "styled-components";

import {
  bgDangerButton,
  bgSuccessButton,
  browShadowColor,
  darkColor,
  errorTextColor,
  lightColor,
  linkTextColor,
  succesTextColor
} from "../../styles/colors";

import { hoverColor, transitionAllEase } from "../../styles/helpers";

export const StyledModal = styled.div`
         position: absolute;
         top: 0;
         left: 0;
         right: 0;
         bottom: 0;
         display: flex;
         align-items: center;
         justify-content: center;
         opacity: 0;
         transition: opacity linear 0.15s;
         z-index: 2000;
         width: 250px;
         margin: 40px auto;

         &.fade-in {
           opacity: 1;
           transition: opacity linear 0.15s;
         }
         &.fade-out {
           opacity: 0;
           transition: opacity linear 0.15s;
         }
         .background {
           background: rgba(0, 0, 0, 0.5);
           position: fixed;
           z-index: 1040;
           display: block;
           top: 0;
           left: 0;
           bottom: 0;
           right: 0;
           outline: 0;
         }

         .box-dialog {
           border: none;
           z-index: 1050;
           max-width: 250px;
           border-radius: 5px;
           background-color: #fefefe;
           box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);

           .box-content {
             font-size: 0.85rem;
             padding: 0px 38px 5px;
           }

           .box-header {
             display: flex;
             padding: 5px 10px;
             align-items: center;
             justify-content: space-between;

             &.danger {
               color: ${errorTextColor};
             }

             &.success {
               color: ${succesTextColor};
             }

             .box-title {
               margin: 0;
               display: flex;
               font-size: 1rem;
               font-weight: bold;
               align-items: center;

               .box-icon {
                 font-size: 28px;
                 margin-right: 10px;
               }
             }

             .close {
               border: none;
               padding: 10px;
               cursor: pointer;
               color: ${darkColor};
               background-color: transparent;

               &:hover {
                 opacity: 0.5;

                 ${hoverColor}
               }
             }
           }

           .box-footer {
             display: flex;
             padding: 10px 35px;
             align-items: center;
             justify-content: flex-end;
             font-family: "Comfortaa", san-serif;

             button {
               cursor: pointer;
               padding: 0 10px;
               font-size: 0.85rem;

               &.close-button {
                 border: none;
                 background: none;
                 color: ${linkTextColor};
                 text-decoration: underline;

                 ${hoverColor}
               }

               &.action-button {
                 border: 0;
                 font-weight: 400;
                 border-radius: 50px;
                 color: ${lightColor};
                 background-size: 150% 100%;
                 box-shadow: 0 0 1px 0 ${browShadowColor};
                 ${transitionAllEase}

                 &.danger {
                   background-image: ${bgDangerButton};

                   &:hover,
                   &:focus,
                   &:active {
                     ${transitionAllEase}
                     background-position: 100% 0;
                     box-shadow: 0 0 2px 0 ${browShadowColor};
                     background-image: linear-gradient(
                       to right,
                       #c80b47,
                       #fd0050
                     );
                   }
                 }

                 &.success {
                   background-image: ${bgSuccessButton};

                   &:hover,
                   &:focus,
                   &:active {
                     ${transitionAllEase}
                     background-position: 100% 0;
                     box-shadow: 0 0 2px 0 ${browShadowColor};
                     background-image: linear-gradient(
                       to right,
                       #1a9f1a,
                       #62ff62
                     );
                   }
                 }
               }
             }
           }
         }
       `;
