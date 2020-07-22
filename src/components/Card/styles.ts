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
  align-items: center;
  justify-content: center;

  border-top: 5px solid;
  border-radius: 5px;
  border-color: ${props => props.color};
  
  margin: 20px;
  background-color: ${props => props.theme.colors.background_card};
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: center;
  padding: 20px;

  > strong {
    color: ${props => props.theme.colors.text_card};
    font-size: 12px;
    margin-left: 10px;
  }
`;

export const Up = styled(UpIcon)``;
export const Down = styled(DownIcon)``;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > strong {
    font-weight: 700;
    font-size: 52px;
    color: ${props => props.theme.colors.text};
  }

  > span {
    font-size: 12px;
    color: ${props => props.theme.colors.text_card};
    text-transform: uppercase;
    letter-spacing: 0.3rem;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;

  > span {
    color: ${props => props.theme.colors.text};
    font-weight: 900;
    font-size: 12px;
    margin-left: 5px;

    &.red {
      color: #DC414C;
    }

    &.green:not(:first-child) {
      color: #1EB589;
    }
  }
`;


export const Facebook = styled(FacebookIcon)``;
export const Twitter = styled(TwitterIcon)``;
export const Instagram = styled(InstagramIcon)``;
export const Youtube = styled(YoutubeIcon)``;
