import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "actions";
import { ago, decodeHtml } from "util.js";

class UserComponent extends Component {
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
    this.props.dispatch(getUser(id));
  }
  render() {
    return (
      <div className="userinfo">
        <div>
          <div className="label">user:</div>
          <div className="text">{this.props.user.id}</div>
        </div>
        <div>
          <div className="label">created:</div>
          <div className="text">{ago(this.props.user.created)}</div>
        </div>
        <div>
          <div className="label">karma:</div>
          <div className="text">{this.props.user.karma}</div>
        </div>
        <div>
          <div className="label about">about:</div>
          <div className="text">{decodeHtml(this.props.user.about)}</div>
          <div className="text link">
            <a href="/">submissions</a>
          </div>
          <div className="text link">
            <a href="/">comments</a>
          </div>
          <div className="text link">
            <a href="/">favorites</a>
          </div>
        </div>
      </div>
    );
  }
}
export const User = connect(
  state => {
    return {
      user: { ...state.user }
    };
  },
  null
)(UserComponent);

export default User;
