import React from 'react';

export default function NumberButtons({ handlerClickButton }) {
  return [1, 2, 3, 4, 5].map((i) => (
    <button type="button" onClick={() => handlerClickButton({ number: i })}>
      {i}
    </button>
  ));
}
