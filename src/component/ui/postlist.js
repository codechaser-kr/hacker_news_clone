import React, { Component } from "react";
import { connect } from "react-redux";

import { getList } from "actions";
import { CONFIG, LIST_TYPE } from "constants.js";
import Post from "component/ui/post";
import Footer from "component/ui/footer";

class PostListComponent extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      type: props.type,
      page: this.props.match.params.page || 1,
      search: ""
    };
  }

  componentDidMount() {
    this.getData(this.state.type, this.state.page, this.state.search);
  }

  getData(type, page, search) {
    this.props.dispatch(getList(type, page, search));
  }

  getMoreLink() {
    const page = parseInt(this.state.page);
    switch (this.state.type) {
      case LIST_TYPE.NEWS_LIST:
        return "/news/" + (page + 1);
      case LIST_TYPE.NEWEST_LIST:
        return "/newest/" + (page + 1);
      case LIST_TYPE.SHOW_LIST:
        return "/show/" + (page + 1);
      case LIST_TYPE.ASK_LIST:
        return "/ask/" + (page + 1);
      case LIST_TYPE.JOB_LIST:
        return "/job/" + (page + 1);
    }
  }

  render() {
    return (
      <div>
        <div className="postlist">
          {this.props.list.map((id, index) => {
            return (
              <Post
                key={id}
                id={id}
                no={CONFIG.PAGE_SIZE * (this.state.page - 1) + index + 1}
                type={this.state.type}
              />
            );
          })}
          <div className="more">
            <span className="morelink">
              <a href={this.getMoreLink()}>More</a>
            </span>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export const PostList = connect(
  state => {
    return {
      list: [...state.list]
    };
  },
  null
)(PostListComponent);

export default PostList;
