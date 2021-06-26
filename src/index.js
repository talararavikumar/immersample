import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { produce } from "immer";
import { createStore } from "redux";
import { Provider } from "react-redux";

const reducer = produce(
  (
    draft = { values: ["one", "two"], secondLevel: { arrSec: [1, 2, 3] } },
    action
  ) => {
    switch (action.type) {
      case "add":
        draft.secondLevel.arrSec.push(action.payload);
        break;
      default:
        return draft;
    }
  }
);

const store = createStore(reducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>{" "}
  </StrictMode>,
  rootElement
);
