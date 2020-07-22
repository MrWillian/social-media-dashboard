import React, { useState } from 'react';

import createSocialMedia from '../../factories/SocialMediaFactory';

import { 
  Container,
  CardHeader,
  CardContent,
  CardFooter,
  Up, 
  Down,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from './styles';

interface Props {
  type: string;
  totalFollowers: string;
  todayFollowers: string;
}

const Card: React.FC<Props> = ({ 
  type, totalFollowers, todayFollowers 
}) => {
  const [socialMedia, setSocialMedia] = useState(
    createSocialMedia(type)
  );

  const getIcon = () => {
    switch(socialMedia!.title) {
      case 'Facebook':
        return <Facebook />;
      case 'Twitter':
        return <Twitter />;
      case 'Instagram':
        return <Instagram />;
      case 'Youtube':
        return <Youtube />;
    }
  }

  return (
    <Container color={socialMedia!.color}>

      <CardHeader>

        {getIcon()}

        <strong>@nathanf</strong>
      </CardHeader>

      <CardContent>
        <strong>{totalFollowers}</strong>
        <span>{socialMedia!.title === 'Youtube' 
            ? 'subscribers' : 'followers' }</span>
      </CardContent>

      <CardFooter>
        {socialMedia!.title === 'Youtube' 
          ? <Down /> : <Up /> }
        <span className={
          socialMedia!.title === 'Youtube' ? 'red' :
          socialMedia!.title === 'Facebook' ? '' : 'green'
        }>
          {todayFollowers} Today
        </span>
      </CardFooter>

    </Container>
  );
}

export default Card;
