import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      background_header: string;

      toggle: string;
      off_toggle: string;
  
      background_card: string;
      text_card: string;

      text: string;
    },
  }
}
