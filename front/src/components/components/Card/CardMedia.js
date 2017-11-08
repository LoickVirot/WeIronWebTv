import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0px;
  margin: 0;
`;

class CardBody extends Component {
  render() {
    return (
      <Wrapper>{this.props.children}</Wrapper>
    );
  }
}

export default CardBody;
