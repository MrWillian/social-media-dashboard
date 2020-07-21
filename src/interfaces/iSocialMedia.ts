export type Icon = {};

export interface iSocialMedia {
  title: string;
  color: string;
  icon: Icon;
  operation(): object;
}