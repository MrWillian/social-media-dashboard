import styled from 'styled-components';

import {
  UpIcon,
  DownIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  YoutubeIcon,
} from '../../styles/Icons/icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;

  margin: 10px 20px;
  background-color: ${props => props.theme.colors.background_card};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 25px 30px 10px 30px;
  color: ${props => props.theme.colors.text_card};

  > strong {
    font-size: 14px;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin: 10px 30px 25px 30px;

  > strong {
    color: ${props => props.theme.colors.text};
    font-size: 32px;
  }

  > span {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 900;

    > span {
      margin-left: 3px;
    }

    &.red {
      color: #DC414C;
    }

    &.green {
      color: #1EB589;
    }
  }

`;

export const Up = styled(UpIcon)``;
export const Down = styled(DownIcon)``;
export const Facebook = styled(FacebookIcon)``;
export const Twitter = styled(TwitterIcon)``;
export const Instagram = styled(InstagramIcon)``;
export const Youtube = styled(YoutubeIcon)``;
