import styled from "styled-components";

import backgroundImage from "../../assets/images/background.png";

export const Container = styled.div`
  height: 98vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${backgroundImage});
`;

export const Form = styled.form`
  width: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin: 10px 0 40px;
  }
  p {
    color: #ff3333;
    margin-bottom: 15px;
    border: 1px solid #ff3333;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  input {
    flex: 1;
    height: 46px;
    margin-bottom: 15px;
    padding: 0 20px;
    color: #777;
    font-size: 15px;
    width: 100%;
    border: 1px solid #ddd;
    &::placeholder {
      color: #999;
    }
  }
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
  a {
    font-size: 16;
    font-weight: bold;
    color: #999;
    text-decoration: none;
  }
`;