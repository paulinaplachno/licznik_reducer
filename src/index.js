import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import "./index.css"

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "clear":
      return { count: 0 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>Licznik: {state.count}</h1>
      <br />
      <button onClick={() => dispatch({ type: "increment" })}>Zwiększ o jeden</button>
      <button onClick={() => dispatch({ type: "clear" })}>Zeruj</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Zmniejsz o jeden</button>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);
