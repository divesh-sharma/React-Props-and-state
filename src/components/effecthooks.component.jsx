import React, { useEffect, useState } from 'react';

export default function EffectHook() {
  let [count, setCount] = useState(200); // available in 16.8+
  // -	Acts like componentDidMount , componentDidUpdate
  useEffect(() => {
    console.log('Use Effect Called !');
    setTimeout(() => console.log('This got executed after 2 secs !'), 2000);
  });

  return (
    <>
      <h3>Count : {count} </h3>
      <button onClick={() => setCount(count + 1)}>++</button>
    </>
  );
}
