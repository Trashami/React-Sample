import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Header() {
  return (
    <header className="header">
      <h1>Survey App</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/admin">Admin</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
