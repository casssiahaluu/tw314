import React, { Suspense } from 'react';

import { Item } from "./styles";

const renderLoader = () => <i class="fas fa-spinner fa-spin"></i>;

export default function Collapse ({faq, index, toggle}) {
  return (
    <Suspense fallback={renderLoader()}>
      <Item 
        key={index} 
        className={faq.open && 'open'}
        onClick={() => toggle(index)}
      >
        <div className="faq-question">
          <h2 style={{fontSize: "1rem"}}>
            {faq.question}
          </h2>
        </div>
        <div className="faq-answer">
          {faq.answer}
        </div>
      </Item>
    </Suspense>
  );
};
