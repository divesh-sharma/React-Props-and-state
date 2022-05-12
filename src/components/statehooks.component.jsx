import React, { useState } from 'react';

export function Counter() {
  let [count, setCount] = useState({ currCount: 200, age: 20 });
  return (
    <>
      <h3>Count : {count.currCount} </h3>
      <h3>Count : {count.age} </h3>
      <button
        onClick={() => setCount({ ...count, currCount: count.currCount + 1 })}
      >
        ++
      </button>
    </>
  );
}
