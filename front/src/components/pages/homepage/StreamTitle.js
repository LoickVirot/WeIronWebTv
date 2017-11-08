import React, { Component } from 'react';
import styled from 'styled-components';

const TVName = styled.h3`
  margin: 0;
  text-transform: capitalize;
  color: #c3c3c3;
`;

const StreamName = styled.h2`
  margin: 0;
  font-weight: 400;
`;

const StreamInfo = styled.div`
  float: right;
  color: #c3c3c3;
`;

class StreamTitle extends Component {
  render() {
    let views = <div><i className="fa fa-eye-slash" aria-hidden="true"></i> Disconnected</div>;
    if (this.props.stream) {
      views = <div><i className="fa fa-eye" aria-hidden="true"></i> {this.props.stream.viewers}</div>
    }

    return (
      <div>
        <StreamInfo>
          <div><i className="fa fa-gamepad" aria-hidden="true"></i> {this.props.game}</div>
          {views}
        </StreamInfo>
        <TVName>TV 1</TVName>
        <StreamName>{this.props.title}</StreamName>
      </div>
    );
  }
}

export default StreamTitle;
