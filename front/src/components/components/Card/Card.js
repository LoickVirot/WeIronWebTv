import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #FFFFFF;
  border: 1px solid #e4e4e4;
  margin-top: 20px;
`;

class CardWrapper extends Component {
  render() {
    return (
      <Wrapper>{this.props.children}</Wrapper>
    );
  }
}

export default CardWrapper;
