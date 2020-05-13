import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "./redux/actions";
import { HashRouter, Route, Switch } from "react-router-dom";
import uid from "uid";
import routes from "./router";

function App({ requestData }) {
  useEffect(() => {
    requestData();
  }, [requestData]);

  const newRoutes = routes.map((item) => (
    <Route key={uid()} exact path={item.url} component={item.component} />
  ));

  return (
    <HashRouter>
      <Switch>{newRoutes}</Switch>
    </HashRouter>
  );
}

export default connect((state) => state, actions)(App);
