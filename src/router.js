import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import HomePage from "./views/HomePage/index";
import DetailPage from "./views/DetailPage/index";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/detail" component={DetailPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
