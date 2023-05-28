import React, {useState} from "react";

interface IProps {}

const Counter: React.FC<IProps> = ({}) => {

    const [count, setCount] = useState(1)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};
export default Counter;
