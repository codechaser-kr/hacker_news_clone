import React, { Component } from "react";
import { connect } from "react-redux";

import { getItem } from "actions";
import { urlParse, ago } from "util.js";
import { LIST_TYPE } from "constants.js";

import vote from "image/grayarrow.gif";

class PostComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      no: this.props.no,
      type: this.props.type
    };
  }

  componentDidMount() {
    this.getData(this.state.id);
  }

  getData(id) {
    this.props.dispatch(getItem(id));
  }

  render() {
    return (
      <div className="post">
        <div className="info">
          {this.props.type != LIST_TYPE.JOB_LIST ? (
            <div className="rank"> {this.props.no}.</div>
          ) : null}
          {this.props.type != LIST_TYPE.JOB_LIST ? (
            <span className="votelinks">
              <a href="/">
                <img src={vote} alt="" />
              </a>
            </span>
          ) : null}
          <span className="title">
            <a href={this.props.item ? this.props.item.url : "/"}>
              {this.props.item ? this.props.item.title : "..."}
            </a>
          </span>
          {this.props.type != LIST_TYPE.ASK_LIST ? (
            <span className="comhead">
              {" "}
              (
              <a href="/">
                {this.props.item ? urlParse(this.props.item.url) : "..."}
              </a>
              ){" "}
            </span>
          ) : null}
        </div>
        <div className="subinfo">
          {this.props.type != LIST_TYPE.JOB_LIST ? (
            <span className="score">
              {this.props.item ? this.props.item.score : "..."} points{" "}
            </span>
          ) : null}
          {this.props.type != LIST_TYPE.JOB_LIST ? (
            <span className="hnuser">
              by{" "}
              <a href={this.props.item ? "/user/" + this.props.item.by : "/"}>
                {this.props.item ? this.props.item.by : "..."}
              </a>{" "}
            </span>
          ) : null}
          <span className="age">
            <a href={"/item/" + this.props.id}>
              {this.props.item ? ago(this.props.item.time) : "..."}
            </a>
          </span>{" "}
          {this.props.type == LIST_TYPE.NEWS_LIST ||
          this.props.type == LIST_TYPE.NEWEST_LIST ? (
            <span className="hide">
              | <a href="/hide">hide</a>{" "}
            </span>
          ) : null}
          {this.props.type != LIST_TYPE.JOB_LIST ? (
            <span className="descendants">
              |{" "}
              <a href={"/item/" + this.props.id}>
                {this.props.item ? this.props.item.descendants : "..."} comments
              </a>
            </span>
          ) : null}
        </div>
      </div>
    );
  }
}
export const Post = connect(
  (state, props) => {
    return {
      item: state.items[props.id]
    };
  },
  null
)(PostComponent);

export default Post;
