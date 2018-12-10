import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <hr className="footerline" />
      <div className="yclink text-center">
        <a href="https://news.ycombinator.com/newsguidelines.html">
          Guidelines
        </a>{" "}
        | <a href="https://news.ycombinator.com/newsfaq.html">FAQ</a> |{" "}
        <a href="mailto:hn@ycombinator.com">Support</a> |{" "}
        <a className="api" href="https://github.com/HackerNews/API">
          API
        </a>{" "}
        | <a href="https://news.ycombinator.com/security.html">Security</a> |{" "}
        <a href="https://news.ycombinator.com/lists">Lists</a> |{" "}
        <a href="https://news.ycombinator.com/bookmarklet.html">Bookmarklet</a>{" "}
        | <a href="https://www.ycombinator.com/legal/">Legal</a> |{" "}
        <a href="https://www.ycombinator.com/apply/">Apply to YC</a> |{" "}
        <a href="mailto:hn@ycombinator.com">Contact</a>
      </div>
      <div className="search text-center">
        <form method="get" action="/from">
          Search:{" "}
          <input
            type="text"
            size="17"
            autoCorrect="off"
            spellCheck="false"
            autoCapitalize="off"
            autoComplete="false"
          />
        </form>
      </div>
    </div>
  );
};

export default Footer;
