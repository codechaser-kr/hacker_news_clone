import React, { Component } from "react";
import { connect } from "react-redux";

import { getItem } from "actions";
import Footer from "component/ui/footer";
import Comment from "component/ui/comment";
import { urlParse, ago } from "util.js";

import vote from "image/grayarrow.gif";

class CommentListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id
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
      <div className="commentlist">
        <div className="post">
          <div className="info">
            <span className="votelinks">
              <a href="/">
                <img src={vote} alt="" />
              </a>
            </span>
            <span className="title">
              <a href={this.props.item ? this.props.item.url : "/"}>
                {this.props.item ? this.props.item.title : "..."}
              </a>
            </span>
            <span className="comhead">
              <a href="/">
                {" ("}
                {this.props.item ? urlParse(this.props.item.url) : "..."}
                {") "}
              </a>
            </span>
          </div>
          <div className="subinfo">
            <span className="score">
              {this.props.item ? this.props.item.score : "..."} points
            </span>{" "}
            by{" "}
            <span className="hnuser">
              <a href={this.props.item ? "/user/" + this.props.item.by : "/"}>
                {this.props.item ? this.props.item.by : "..."}
              </a>
            </span>{" "}
            <span className="age">
              <a href="/">
                {this.props.item ? ago(this.props.item.time) : "..."}
              </a>
            </span>{" "}
            |{" "}
            <span className="hide">
              <a href="/">hide</a>
            </span>{" "}
            |{" "}
            <span className="comments">
              <a href={"/item/" + this.state.id}>
                {this.props.item ? this.props.item.descendants : "..."} comments
              </a>
            </span>
          </div>
        </div>
        <div className="newpost">
          <textarea rows="6" cols="60" />
          <input type="submit" value="add comment" />
        </div>
        {this.props.item && this.props.item.kids
          ? this.props.item.kids.map(id => <Comment key={id} id={id} />)
          : ""}
        <Footer />
      </div>
    );
  }
}
export const CommentList = connect(
  (state, props) => {
    return {
      item: state.items[props.match.params.id]
    };
  },
  null
)(CommentListComponent);

export default CommentList;
