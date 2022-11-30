import { useSelector, useDispatch } from "react-redux";
import React from "react";

const App = () => {
  const dispatch = useDispatch();
  const note = useSelector((state) => state);
  const good = () => {
    dispatch({
      type: "GOOD",
    });
  };
  const ok = () => {
    dispatch({
      type: "OK",
    });
  };
  const bad = () => {
    dispatch({
      type: "BAD",
    });
  };
  const reset = () => {
    dispatch({
      type: "RESET",
    });
  };
  return (
    <div>
      <button onClick={good}>good</button>
      <button onClick={ok}>ok</button>
      <button onClick={bad}>bad</button>
      <button onClick={reset}>reset stats</button>
      {/* <div>good {store.getState().good}</div> */}
      <div>good{note.good}</div>
      <div>ok{note.ok}</div>
      <div>bad{note.bad}</div>
    </div>
  );
};

export default App;
