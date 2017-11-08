import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import api from '../../../config/api';

import Card from '../../components/Card/Card';
import CardTitle from '../../components/Card/CardTitle';
import CurrentlyStreamingItem from './CurrentlyStreamingItem';

const Ul = styled.ul`
  margin: 0;
  padding: 0;
`

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      online: [],
      offline: []
    }
  }

  getStreamers() {
    const self = this;
    axios.get("http://localhost:1337/userinfo?isStreamer=true")
    .then(streamers => {
      streamers.data.map((streamer, index) => {
        let state = self.state;
        axios.get("https://api.twitch.tv/kraken/streams/"+ streamer.twitchId +"?client_id=" + api.twitch.client_id)
        .then(result => {
          if (!result.data.stream) {
            state.offline.push(
              <CurrentlyStreamingItem
              channel={streamer.account.username}
              username={streamer.twitchId}
              picture={"http://lorempicsum.com/futurama/50/50/" + (index + 1)}
              key={streamer.twitchId}
              />
            );
          } else {
            state.online.push(
              <CurrentlyStreamingItem
              channel={streamer.account.username}
              username={streamer.twitchId}
              picture={"http://lorempicsum.com/futurama/50/50/" + (index + 1)}
              game={result.data.stream.game}
              key={streamer.twitchId}
              />
            );
          }
          self.setState(state);
        })
        .catch(err => {
          console.error(err);
        });
      });
    })
    .catch(error => {
      console.error(error);
    });
  }

  componentWillMount() {
    this.getStreamers();
  }

  render() {
    return (
      <div>
        <Card>
          <CardTitle>Currently streaming</CardTitle>
          <Ul>
            {this.state.online}
          </Ul>
        </Card>
        <Card>
          <CardTitle>Others streamers</CardTitle>
          <Ul>
            {this.state.offline}
          </Ul>
        </Card>
      </div>
    );
  }
}

export default MainContent;
