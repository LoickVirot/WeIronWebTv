import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import api from '../../../config/api';

import Card from '../../components/Card/Card';
import CardBody from '../../components/Card/CardBody';
import CardMedia from '../../components/Card/CardMedia';
import StreamTitle from './StreamTitle';

const LiveWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tv1: {
        channel: {},
        streaming: {}
      }
    }
  }

  getStreamInfo() {
    const self = this;
    Promise.all([
      axios.get("https://api.twitch.tv/kraken/channels/ogaminglol?client_id=" + api.twitch.client_id),
      axios.get("https://api.twitch.tv/kraken/streams/ogaminglol?client_id=" + api.twitch.client_id)
    ])
    .then((results) => {
      self.setState({
        tv1: {
          channel: results[0].data,
          streaming: results[1].data.stream
        }
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  componentWillMount() {
    this.getStreamInfo();
  }

  render() {
    return (
      <Card>
        <CardMedia>
          <LiveWrapper>
            <Iframe src={"https://player.twitch.tv/?channel=ogaminglol"} frameborder={"0"} allowfullscreen={"true"} scrolling={"no"}></Iframe>
          </LiveWrapper>
        </CardMedia>
        <CardBody>
          <StreamTitle
            title={this.state.tv1.channel.status}
            game={this.state.tv1.channel.game}
            stream={this.state.tv1.streaming}
          />
        </CardBody>
      </Card>
    );
  }
}

export default MainContent;
