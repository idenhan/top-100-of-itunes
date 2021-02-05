import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import TopAlbums from "./pages/TopAlbums";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={TopAlbums} />
    <Route path="/album">
      <Redirect push to="/" />
    </Route>
  </Switch>
);

export default Routes;
