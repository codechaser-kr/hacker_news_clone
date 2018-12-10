import React, { Component } from "react";
import { connect } from "react-redux";

import { getItem, toggleItem } from "actions";
import { ago, decodeHtml } from "util.js";

import vote from "image/grayarrow.gif";

class CommentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id
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
      <div className="commentbox">
        <div className="info">
          <span className="votelinks">
            <a href="/">
              <img src={vote} alt="" />
            </a>
          </span>
          <span className="hnuser">
            <a href={"/user/" + this.props.item.by}>{this.props.item.by}</a>
          </span>{" "}
          <span className="age">
            <a href="/">{ago(this.props.item.time)}</a>
          </span>{" "}
          <button
            type="button"
            className={
              "btn linkbtn " + (this.props.item.isopen ? "expand" : "collapse")
            }
            onClick={() => {
              this.props.dispatch(toggleItem(this.props.id));
            }}
          />
        </div>
        {this.props.item.isopen ? (
          <div className="comment">
            <span
              dangerouslySetInnerHTML={{
                __html: decodeHtml(this.props.item.text)
              }}
            />
            <div className="reply">
              <a href="/reply">reply</a>
            </div>
            {this.props.item.kids
              ? this.props.item.kids.map(id => {
                  return <Comment key={id} id={id} />;
                })
              : ""}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
export const Comment = connect(
  (state, props) => {
    return {
      item: { ...state.items[props.id] }
    };
  },
  null
)(CommentComponent);

export default Comment;
