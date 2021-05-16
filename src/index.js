import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./state/store";
import { Provider } from "react-redux";
// import WaterFill from "./components/loader/waterFill"

// const App = React.lazy(() => import('./App'))
const root = document.getElementById("root")
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <Suspense fallback={<WaterFill />}> */}
      <App />
      {/* </Suspense> */}
    </Provider>
  </React.StrictMode>,
  root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
