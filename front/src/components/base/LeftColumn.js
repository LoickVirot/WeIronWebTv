import React, { Component } from 'react';
import MenuItem from './MenuItem';

const leftColumn = {
  width: "250px",
  background: "#384349",
  color: "#EFF1F2",
  paddingTop: 60,
  position: "absolute",
  top: 0,
  bottom: 0
}

const ul = {
  padding: 0
}


class LeftColumn extends Component {
  render() {
    return (
      <div style={leftColumn}>
        <ul style={ul}>
          <MenuItem label="Home" href="#" />
          <MenuItem label="Subscriptions" href="#" />
          <MenuItem label="Account" href="#" />
        </ul>
      </div>
    );
  }
}

export default LeftColumn;
