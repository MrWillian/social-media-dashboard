import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --lime-green: hsl(163, 72%, 41%);
    --bright-red: hsl(356, 69%, 56%);

    --facebook: hsl(208, 92%, 53%);
    --twitter: hsl(203, 89%, 53%);
    --instagram: linear-gradient(hsl(37, 97%, 70%), hsl(329, 70%, 58%));
    --youtube: hsl(348, 97%, 39%);

    --dark-toggle: linear-gradient(hsl(210, 78%, 56%), hsl(146, 68%, 55%));
    --light-toggle: hsl(230, 22%, 74%);

    --very-dark-blue-BG: hsl(230, 17%, 14%);
    --very-dark-blue-top-BG: hsl(232, 19%, 15%);
    --dark-desaturated-blue-card-BG: hsl(228, 28%, 20%);
    --desaturated-blue-text: hsl(228, 34%, 66%);
    --White-text: hsl(0, 0%, 100%);

  }
`;
