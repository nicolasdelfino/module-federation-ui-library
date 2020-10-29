import React from "react";
import ReactDOM from "react-dom";
import "team-ui/BaseStyles";
import "./styles/index.css";
import Standalone from "./Standalone";

const HomeStandalone = () => (
  <Standalone  />
);

ReactDOM.render(<HomeStandalone />, document.getElementById("home-entry"));



