import { Register, ForgotLink, Registered, Form } from "./pages";
import * as ROUTES from "./constants/routes";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={`${ROUTES.FORM}/:secret`}>
          <Form />
        </Route>
        <Route path={`${ROUTES.REGISTERED}/:secret`}>
          <Registered />
        </Route>
        <Route exact={true} path={ROUTES.FORGOT_LINK}>
          <ForgotLink />
        </Route>
        <Route exact={true} path={ROUTES.REGISTER}>
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
