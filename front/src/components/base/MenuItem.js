import React, { Component } from 'react';
import styled from 'styled-components';

const Li = styled.li`
  transition: all 0.2s ease;
  &:hover {
    background: #273239;
    padding-left: 20px;
  }
`;

const A = styled.a`
  display: block;
  padding: 20px;
  color: #EFF1F2;
  text-decoration: none;
`;

class MenuItem extends Component {
  render() {
    return (
      <Li>
        <A href={this.props.href}>{this.props.label}</A>
      </Li>
    );
  }
}

export default MenuItem;
