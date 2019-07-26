import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import User from "./User";
import Contact from "./Contact";
import NotFound from "./notfound";
import {
  Route,
  Link,
  BrowserRouter as Router,
  Switch,
  NavLink
} from "react-router-dom";
import Notfound from "./notfound";
/* import * as serviceWorker from './serviceWorker';
 */

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active" to="/users">
            Users
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>

      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/users" component={User} />
       {/*  <Route path="/users/:id" component={User} /> */}
        <Route path="/contact" component={Contact} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
/* 
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
 */
