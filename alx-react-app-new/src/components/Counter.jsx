import React from "react";
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <div>
      <button onClick={()=>setCount(count +1)}>incrementing</button>
      <button onClick={()=>setCount(count - 1)}>decrementing</button>
      <button onClick={()=>setCount(0)}>resetting</button>
      </div>
    </div>
  );
};

export default Counter;
