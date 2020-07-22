import { SocialMedia } from '../models/SocialMedia';
import { SOCIAL_MEDIA } from '../enums/SocialMediaEnum';

export default function createSocialMedia(socialMedia: string): SocialMedia | undefined {
  try {
    switch(socialMedia) {
      case SOCIAL_MEDIA.FACEBOOK:
        return new SocialMedia('Facebook', 'hsl(208, 92%, 53%)');
      
      case SOCIAL_MEDIA.INSTAGRAM:
        return new SocialMedia('Instagram', 'linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))');
      
      case SOCIAL_MEDIA.TWITTER:
        return new SocialMedia('Twitter', 'hsl(203, 89%, 53%)');
      
      case SOCIAL_MEDIA.YOUTUBE:
        return new SocialMedia('Youtube', 'hsl(348, 97%, 39%)');
    }
  } catch (error) {
    return error;
  }
}
