import { SocialMedia } from '../models/SocialMedia';
import { SOCIAL_MEDIA } from '../enums/SocialMediaEnum';

import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from '../styles/Icons/icons';

export default function createSocialMedia(socialMedia: string): SocialMedia | undefined {
  try {
    switch(socialMedia) {
      case SOCIAL_MEDIA.FACEBOOK:
        return new SocialMedia('Facebook', 'hsl(208, 92%, 53%)', FacebookIcon);
      
      case SOCIAL_MEDIA.INSTAGRAM:
        return new SocialMedia('Instagram', 'linear-gradient(hsl(37, 97%, 70%), hsl(329, 70%, 58%))', InstagramIcon);
      
      case SOCIAL_MEDIA.TWITTER:
        return new SocialMedia('Twitter', 'hsl(203, 89%, 53%)', TwitterIcon);
      
      case SOCIAL_MEDIA.YOUTUBE:
        return new SocialMedia('Youtube', 'hsl(348, 97%, 39%)', YoutubeIcon);
    }
  } catch (error) {
    return error;
  }
}
