import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

const MainInfo = styled.div`
  display: flex;
  padding: 0 260px;
`;

const UserPicWrapper = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 4px solid #fff;
  overflow: hidden;
  background: url('img/logo.svg');
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

export const Profile = () => (
  <Wrapper>
    <MainInfo>
      <UserPicWrapper />
      <UserInfo>
        <UserName>
          Zanzo <b>Name</b>
        </UserName>
        <UserLink href="https://vk.com/whaaa">
          <Sublink>https://vk.com/</Sublink>whaaa
        </UserLink>
      </UserInfo>
    </MainInfo>
    <FriendsList>Друзья в приложении</FriendsList>
  </Wrapper>
);
