import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Li = styled.li`
  list-style: none;
  transition: all 0.2s ease;
  border-top: 1px solid #EAEAEA;

  a {
    display: flex;
    flex-direction: row;
    padding: 20px;
    color: #384349;
    text-decoration: none;
    transition: all 0.2s ease;

    &:hover {
      background: #EAEAEA;
      padding-left: 40px;
      border-left: 5px solid #61BDD7;
    }
  }
`;

const Img = styled.img`
  border-radius: 50%;
  height: 35px;
  margin-right: 10px;
`;

const Username = styled.span`
  margin: auto 0;
  text-transform: uppercase;
  font-weight: 600;
`;

const CurrentGame = styled.span`
  margin: auto 0;
  color: #c3c3c3;
  font-size: 0.8em;
  margin-left: auto;
`;

class CurrentlyStreamingItem extends Component {
  render() {
    let currentGame = <CurrentGame><i className="fa fa-video-camera" aria-hidden="true" style={{fontSize: "0.8em"}}></i> {this.props.game}</CurrentGame>;
    if (!this.props.game) {
      currentGame = null;
    }

    return (
      <Li>
        <Link to={"/channel/" + this.props.channel}>
          <Img src={this.props.picture} />
          <Username>{this.props.username}</Username>
          {currentGame}
        </Link>
      </Li>
    );
  }
}

export default CurrentlyStreamingItem;
