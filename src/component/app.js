import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { LIST_TYPE } from "constants.js";
import Navigation from "component/ui/navigation";
import Home from "component/ui/home";
import PostList from "component/ui/postlist";
import CommentList from "component/ui/commentlist";
import User from "component/ui/user";
import NoPage from "component/ui/nopage";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path={"/news"}
            render={props => <PostList {...props} type={LIST_TYPE.NEWS_LIST} />}
          />
          <Route
            exact
            path={"/news/:page"}
            render={props => <PostList {...props} type={LIST_TYPE.NEWS_LIST} />}
          />
          <Route
            exact
            path={"/newest"}
            render={props => (
              <PostList {...props} type={LIST_TYPE.NEWEST_LIST} />
            )}
          />
          <Route
            exact
            path={"/newest/:page"}
            render={props => (
              <PostList {...props} type={LIST_TYPE.NEWEST_LIST} />
            )}
          />
          {/* <Route
            exact
            path={"/newcomments"}
            render={props => (
              <PostList {...props} type={LIST_TYPE.COMMENT_LIST} />
            )}
          />
          <Route
            exact
            path={"/newcomments/:page"}
            render={props => (
              <PostList {...props} type={LIST_TYPE.COMMENT_LIST} />
            )}
          /> */}
          <Route
            exact
            path={"/show"}
            render={props => <PostList {...props} type={LIST_TYPE.SHOW_LIST} />}
          />
          <Route
            exact
            path={"/show/:page"}
            render={props => <PostList {...props} type={LIST_TYPE.SHOW_LIST} />}
          />
          <Route
            exact
            path={"/ask"}
            render={props => <PostList {...props} type={LIST_TYPE.ASK_LIST} />}
          />
          <Route
            exact
            path={"/ask/:page"}
            render={props => <PostList {...props} type={LIST_TYPE.ASK_LIST} />}
          />
          <Route
            exact
            path={"/job"}
            render={props => <PostList {...props} type={LIST_TYPE.JOB_LIST} />}
          />
          <Route
            exact
            path={"/job/:page"}
            render={props => <PostList {...props} type={LIST_TYPE.JOB_LIST} />}
          />
          <Route
            exact
            path={"/user/:id"}
            render={props => <User {...props} />}
          />
          <Route
            exact
            path={"/item/:id"}
            render={props => <CommentList {...props} />}
          />
          <Route component={NoPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
