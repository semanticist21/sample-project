import React, { useReducer } from "react";

// 상태 정의
// 액션 정의
type State = { number: number };
type Action = { type: "INCREMENT" } | { type: "DECREMENT" };

// Intial State 정의
const intialState: State = {
  number: 0,
};

// Reducer 정의
const counterReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "INCREMENT":
      return { number: state.number + 1 };
    case "DECREMENT":
      return { number: state.number + 1 };
    default:
      return { ...state };
  }
};

const CounterButton: React.FC = (props) => {
  const [state, dispatch] = useReducer(counterReducer, intialState);

  return (
    <div className="">
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <h1>{state.number.toString()}</h1>
    </div>
  );
};

export default CounterButton;
