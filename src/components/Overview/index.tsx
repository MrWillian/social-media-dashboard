import React from 'react';

import { 
  Container, 
  Header, 
  Footer,
  Up,
  Down,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from './styles';

interface Props {
  info: string;
  value: string;
  socialMedia: string;
  isPositive?: boolean;
  variationPercentage: number;
}

const Overview: React.FC<Props> = ({
  info, value, socialMedia, isPositive, variationPercentage
}) => {

  function getIcon() {
    switch(socialMedia) {
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
    <Container>
      <Header>
        <strong>{info}</strong>
        {getIcon()}
      </Header>
      <Footer>
        <strong>{value}</strong>
        <span className={isPositive ? 'green' : 'red'}>
          {isPositive ? <Up /> : <Down />}
          <span>{variationPercentage}%</span>
        </span>
      </Footer>
    </Container>
  );
}

export default Overview;
