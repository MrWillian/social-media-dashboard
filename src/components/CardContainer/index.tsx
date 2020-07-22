import React from 'react';
import Card from '../../components/Card';
import { SOCIAL_MEDIA } from '../../enums/SocialMediaEnum';

import { Container } from './styles';

const CardContainer: React.FC = () => {
  return (
    <Container>
      <Card 
        type={SOCIAL_MEDIA.FACEBOOK} 
        totalFollowers={'1987'}
        todayFollowers={'12'} />

      <Card type={SOCIAL_MEDIA.TWITTER} 
        totalFollowers={'1044'}
        todayFollowers={'99'} />

      <Card type={SOCIAL_MEDIA.INSTAGRAM}
        totalFollowers={'11k'}
        todayFollowers={'1099'}  />

      <Card type={SOCIAL_MEDIA.YOUTUBE} 
        totalFollowers={'8239'}
        todayFollowers={'144'} />

    </Container>
  );
}

export default CardContainer;