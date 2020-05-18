import React from "react";

import Page from "../../components/Page";
import Collapse from "../../components/Collapse";
import { Container } from "./styles";

function Help () {
  const [faqs, setFaqs] = React.useState([{
    question: "O que é um qrcode?",
    answer: (<React.Fragment>Um negócio muito bonito</React.Fragment>),
    open: false
  }, {
    question: "Onde encontro a senha?",
    answer: (<React.Fragment>A senha (ou o qrcode) são disponibilizadas pelo estabelecimento, seja por meio de site do local ou pessoalmente, no momento do atendimento. Basta depois adicionar a senha ou escanear o qrCode e pronto! Você entrou na fila <span role="img" aria-label="risadinha tampando a boca">&#129325;</span></React.Fragment>),
    open: false
  }, {
    question: "Onde posso usar o TW?",
    answer: (<React.Fragment>O TW pode ser usado em qualquer estabelecimento (local) parceiro. Só precisa adicionar a senha ou escanear o qrcode usando esse app bonitão aqui e ser feliz. Simples assim! <span role="img" aria-label="sorriso com olhos de estrela">&#129321;</span></React.Fragment>),
    open: false
  }]);

  function toggleCollapse(index) {
    setFaqs(faqs.map((faq, i) => {
      i === index ? faq.open = !faq.open : faq.open = false;

      return faq;
    }));
  }

  return (
    <Page title="ajuda">
      <Container>
        {faqs.map((faq, i) => (
          <Collapse faq={faq} index={i} toggle={toggleCollapse} />
        ))}
      </Container>
    </Page>
  );
}

export default Help;
