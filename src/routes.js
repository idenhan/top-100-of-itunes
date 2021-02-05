import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import TopAlbums from "./pages/TopAlbums";
import SingleAlbum from "./pages/SingleAlbum";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={TopAlbums} />
    <Route exact path="/album/:id" component={SingleAlbum} />
    <Route path="/album">
      <Redirect push to="/" />
    </Route>
  </Switch>
);

export default Routes;
