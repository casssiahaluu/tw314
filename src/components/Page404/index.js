import React from "react";

import { Item } from "./styles";

export default function Page404 ({faq, index, toggle}) {
  return (
    <Item 
      key={index} 
      className={faq.open && 'open'}
      onClick={() => toggle(index)}
    >
      Santa página vazia, Batman! Nessa lista não tem nada! Que tal adicionar algo ao histórico antes?
    </Item>
  );
};
