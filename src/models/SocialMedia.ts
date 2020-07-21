import { iSocialMedia, Icon } from '../interfaces/iSocialMedia';

export class SocialMedia implements iSocialMedia {
  public title: string;
  public color: string;
  public icon: Icon;

  constructor(title: string, color: string, icon: Icon) {
    this.title = title;
    this.color = color;
    this.icon = icon;
  }

  public operation(): object {
    return {
      "title": this.title, 
      "color": this.color, 
      "icon": this.icon
    };
  }
}
