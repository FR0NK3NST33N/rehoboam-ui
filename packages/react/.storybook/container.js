import React, { Component } from "react";

export default class Container extends Component {
  render() {
    const { story } = this.props;

    return <div role="main">{story()}</div>;
  }
}
