import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body {
    width: 100%;
    height: 100%;
    background: ${props => props.theme.colors.background};
  }

  #root {
    font-family: 'Inter', sans-serif;
  }

  :root {
    --lime-green: hsl(163, 72%, 41%);
    --bright-red: hsl(356, 69%, 56%);

    --facebook: hsl(208, 92%, 53%);
    --twitter: hsl(203, 89%, 53%);
    --instagram: linear-gradient(hsl(37, 97%, 70%), hsl(329, 70%, 58%));
    --youtube: hsl(348, 97%, 39%);

    --dark-toggle: linear-gradient(to-right, hsl(210, 78%, 56%), hsl(146, 68%, 55%));
    --light-toggle: hsl(230, 22%, 74%);

    --very-dark-blue-BG: hsl(230, 17%, 14%);
    --very-dark-blue-top-BG: hsl(232, 19%, 15%);
    --dark-desaturated-blue-card-BG: hsl(228, 28%, 20%);
    --desaturated-blue-text: hsl(228, 34%, 66%);
    --white-text: hsl(0, 0%, 100%);

    --white-BG: hsl(0, 0%, 100%);
    --very-pale-blue-top-BG: hsl(225, 100%, 98%);
    --light-grayish-blue-card-BG: hsl(227, 47%, 96%);
    --dark-grayish-blue-text: hsl(228, 12%, 44%);
    --very-dark-blue-text: hsl(230, 17%, 14%);

    --white: #FFF;

    --font-size: 14px;
  }
`;
