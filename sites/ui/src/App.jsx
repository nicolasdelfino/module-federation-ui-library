import React from "react";
import ReactDOM from "react-dom";
import "team-ui/BaseStyles";

import Standalone from "./Standalone";

const UIStandalone = () => (
  <Standalone  />
);

ReactDOM.render(<UIStandalone />, document.getElementById("ui-entry"));

