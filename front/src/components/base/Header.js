import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const UserInfo = styled.a`
  display: flex;
  justify-content: center;
  flex-direction: row;
  text-align: center;
`;

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  background: #27A3BA;
  color: #EFF1F2;
  z-index: 10;
`;

const H1 = styled.h1`
  margin: 0;
  font-weight: 600;
  display: inline;
`

const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin: auto;
  margin-right: 10px;
`

const Container = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`

const Navigator = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
  margin-right: auto;
  margin-left: 30px;
`

const MenuItem = styled.li`
  list-style: none;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 0 10px;

  a {
    color: #187789;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
    transition: all 0.2s ease;
    &:hover {
      color: #EFF1F2;
    }
    &.selected {
      color: #EFF1F2;
    }
  }
`;

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <H1>WeIronWebTV</H1>
          <Navigator>
            <MenuItem><NavLink exact to="/" activeClassName="selected">Home</NavLink></MenuItem>
            <MenuItem><NavLink to="/channel/eloteck" activeClassName="selected">Channel</NavLink></MenuItem>
          </Navigator>
          <UserInfo href="#">
            <ProfilePicture src="http://lorempicsum.com/futurama/50/50/2" />
          </UserInfo>
        </Container>
      </Wrapper>
    );
  }
}

export default Header;
