import React from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import { redirect } from '../../common/utils';

const Wrapper = styled.div`
  background-color: #363d47;
`;

const InnerContainer = styled.div`
  width: 1200px;
  margin: auto;
  padding-top: 115px;
  padding-bottom: 20px;
`;

const Title = styled.div`
  position: relative;
  text-align: center;
  width: 200px;
  margin: auto;
  margin-bottom: 20px;
  z-index: 1000;
`;

const TitleLogo = styled.img``;

const TitleText = styled.p`
  font-size: 17px;
  font-weight: 400;
  color: #f3f3f3;
  text-align: center;
  margin-top: 5px;
`;

const LogoBackgroundPicWrapper = styled.div`
  margin: auto;
  width: 365px;
`;

const LogoBackgroundPic = styled.img``;

const ButtonSubmit = styled.button`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  width: auto;
  padding: 13px 23px 13px 18px;
  height: 50px;
  bottom: 45px;
  margin: auto;
  background: #4a76a8;
  border-radius: 25px;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.05);
  border: none;
  outline: none;
  font-size: 20px;
  line-height: 20px;
  color: #fff;
  cursor: pointer;

  > img {
    position: relative;
    top: 5px;
    margin-right: 10px;
  }
`;

const ButtonText = styled.span`
  line-height: 20px;
  display: block;
`;

const InfoButton = styled.a`
  display: block;
  margin: auto;
  width: 30px;
  height: 30px;
  margin-top: 75px;
  background: url('img/info.svg');
`;

const BottomText = styled.p`
  margin: 0 auto;
  margin-top: 20px;
  text-align: center;
  color: #fff;
`;

export const Auth = props => {
  if (props.authenticated) {
    return (
      <Redirect
        to={{
          pathname: '/',
        }}
      />
    );
  }

  return (
    <Wrapper>
      <InnerContainer>
        <Title>
          <TitleLogo src="img/logo.svg" />
          <TitleText>читай, передавай</TitleText>
        </Title>
        <LogoBackgroundPicWrapper>
          <LogoBackgroundPic src="img/logo_background.svg" />
        </LogoBackgroundPicWrapper>
        <ButtonSubmit
          onClick={() => redirect('http://95.213.28.133/server/login')}
        >
          <img src="img/vk_logo.svg" alt="" />
          <ButtonText>Войти через vk</ButtonText>
        </ButtonSubmit>
        <InfoButton data-tip="Приветки, ДРУГ" />
        <BottomText>
          Правильный формат книжного обмена, hackathon 2018
        </BottomText>
      </InnerContainer>
      <ReactTooltip />
    </Wrapper>
  );
};
