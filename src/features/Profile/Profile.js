import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

const MainInfo = styled.div`
  display: flex;
  padding: 60px 260px;
`;

const UserPicWrapper = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 4px solid #fff;
  overflow: hidden;
  background: url(${({ avatarUrl }) => avatarUrl || '#fff'});
  background-repeat: no-repeat;
  background-size: cover;
`;

const UserInfo = styled.div`
  margin-left: 40px;
`;

const UserName = styled.p`
  color: #fff;
  font-size: 20px;
`;

const FriendsList = styled.div``;

const UserLink = styled.a`
  display: block;
  font-size: 18px;
  color: #fff;
`;

const Sublink = styled.span`
  color: #b5b6b8;
`;

export class Profile extends Component {
  componentDidMount() {
    this.props.fetchProfileData();
  }

  render() {
    const {
      profile: { vkDomain, id, firstname, lastname, avatarUrl },
    } = this.props;
    return (
      <Wrapper>
        <MainInfo>
          <UserPicWrapper avatarUrl={avatarUrl} />
          <UserInfo>
            <UserName>
              {firstname} <b>{lastname}</b>
            </UserName>
            <UserLink href={`https://vk.com/${vkDomain || id}`}>
              <Sublink>https://vk.com/</Sublink>
              {vkDomain || id}
            </UserLink>
          </UserInfo>
        </MainInfo>
        <FriendsList>Друзья в приложении</FriendsList>
      </Wrapper>
    );
  }
}
