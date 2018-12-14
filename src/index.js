import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import PortfolioDetail from "./PortfolioDetail";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/:itemId" component={PortfolioDetail} />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

registerServiceWorker();
