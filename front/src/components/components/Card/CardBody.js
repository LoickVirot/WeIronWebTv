import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px;
`;

class CardBody extends Component {
  render() {
    return (
      <Wrapper>{this.props.children}</Wrapper>
    );
  }
}

export default CardBody;
