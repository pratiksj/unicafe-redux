import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import reducer from "./reducer";
import { Provider } from "react-redux";
import App from "./App";

const store = createStore(reducer);

// const App = () => {
//   const good = () => {
//     store.dispatch({
//       type: 'GOOD'
//     })
//   }

//   return (
//     <div>
//       <button onClick={good}>good</button>
//       <button>ok</button>
//       <button>bad</button>
//       <button>reset stats</button>
//       <div>good {store.getState().good}</div>
//       <div>ok</div>
//       <div>bad</div>
//     </div>
//   )
// }
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
// const root = ReactDOM.createRoot(document.getElementById('root'))
// const renderApp = () => {
//   root.render(<App />)
// }

// renderApp()
// store.subscribe(renderApp)
