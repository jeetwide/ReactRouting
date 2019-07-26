import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

const UserNo = ({ match }) => <h2>{match.params.id}</h2>;

export default class User extends Component {
  render() {
    const { url } = this.props.match;

    //console.log(this.props);
    return (
      <div>
        <h1>Users</h1>

        <strong> select a user</strong>
        <ul>
          <li>
            <Link to="/users/1">User 1</Link>
          </li>
          <li>
            <Link to="/users/2">User 2</Link>
          </li>
          <li>
            <Link to="/users/3">User 3</Link>
          </li>
        </ul>
        <Route path="/users/:id" component={UserNo} />
      </div>
    );
  }
}
