import styled from "styled-components";

import {
  darkTextColor,
} from "../../styles/colors";

import {
  borderColor,
  fontAwesomeConfig,
  transitionAllEase
} from "../../styles/helpers";

export const Item = styled.div`
  padding: 15px 20px;
  color: ${darkTextColor};
  border-top: ${borderColor};
  background-color: #ebebeb82;

  &.open {
    .faq-question {
      margin-bottom: 15px;

      &::after {
        transform: translateY(-50%) rotate(180deg);
      }
    }

    .faq-answer {
      opacity: 1;
      max-height: 1000px;
    }
  }

  .faq-question {
    ${transitionAllEase}

    font-weight: 700;
    position: relative;
    padding-right: 80px;

    &::after {
      ${fontAwesomeConfig}
      ${transitionAllEase}
      
      content: "\f0d7";
      top: 50%;
      right: 10px;
      position: absolute;
      transform: translateY(-50%);
    }
  }

  .faq-answer {
    ${transitionAllEase}

    opacity: 0;
    max-height: 0;
    font-size: 0.80rem;
    overflow-y: hidden;
  }
`;