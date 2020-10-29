import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "team-ui/BaseStyles";
import "./styles/index.css";
import Router from "./Router";

const Shell = () => (
  <div className="site">
    <Router  />
  </div>
);

ReactDOM.render(<Shell />, document.getElementById("app"));

