import React, { Component } from 'react';
import styled from 'styled-components';
import {Row, Col} from 'react-flexbox-grid';

import Streamers from './Streamers';
import MainStream from './MainStream';

const Wrapper = styled.div`
  padding: 20px;
  padding-top: 80px;
`;

class MainContent extends Component {
  render() {
    return (
      <Wrapper>
        <Row>
          <Col md={4} lg={3} sm={12}>
            <Streamers />
          </Col>
          <Col md={8} lg={9} sm={12}>
            <MainStream />
          </Col>
        </Row>
      </Wrapper>
    );
  }
}

export default MainContent;
