import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/admin">
      Home page
    </Link>

    <Link to="/admin/mybasket">My Basket</Link>
    <Link to="/admin/setting">Setting</Link>

    <form className="form-inline my-2 my-lg-0">
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  </nav>
);
