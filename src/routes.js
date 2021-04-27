import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import TopAlbums from "./pages/TopAlbums";
import SingleAlbum from "./pages/SingleAlbum";
import Header from "./components/Header";

const Routes = () => (
  <Switch>
    <Route exact path="/top-100-of-itunes" component={TopAlbums} />
    <Route exact path="/top-100-of-itunes/album/:id" component={SingleAlbum} />
    <Route path="/top-100-of-itunes/album">
      <Redirect push to="/top-100-of-itunes" />
    </Route>
  </Switch>
);

export default Routes;
