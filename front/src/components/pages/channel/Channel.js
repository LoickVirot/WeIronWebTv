import React, { Component } from 'react';
import styled from 'styled-components';
import {Row, Col} from 'react-flexbox-grid';
import axios from 'axios';

import api from '../../../config/api';

const Wrapper = styled.div`
  padding: 20px;
  padding-top: 80px;
`;

class Channel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Wrapper>
        <h1>Channel of {this.props.match.params.id}</h1>
      </Wrapper>
    );
  }
}

export default Channel;
