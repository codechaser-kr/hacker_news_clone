import React from "react";
import logo from "image/y18.gif";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-sm">
      <a className="logo" href="/">
        <img src={logo} alt="logo" />
      </a>
      <span className="navbar-text">
        <a href="/news">Hacker News</a> <a href="/newest">new</a> |{" "}
        <a href="/newcomments">comments</a> | <a href="/show">show</a> |{" "}
        <a href="/ask">ask</a> | <a href="/job">jobs</a> |{" "}
        <a href="/submit">submit</a>
      </span>
      <span className="mr-auto" />
      <span className="login">
        <a href="/login">login</a>
      </span>
    </nav>
  );
};

export default Navigation;
