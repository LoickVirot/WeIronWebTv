import React, { Component } from 'react';
import styled from 'styled-components';

const H2 = styled.h2`
  padding: 20px;
  margin: 0;
`;

class CardTitle extends Component {
  render() {
    return (
      <div>
        <H2>
          {this.props.children}
        </H2>
      </div>
    );
  }
}

export default CardTitle;
