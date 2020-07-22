import { iSocialMedia } from '../interfaces/iSocialMedia';

export class SocialMedia implements iSocialMedia {
  public title: string;
  public color: string;

  constructor(title: string, color: string) {
    this.title = title;
    this.color = color;
  }

  public operation(): object {
    return {
      "title": this.title, 
      "color": this.color,
    };
  }
}
