import React from 'react';

import Overview from '../Overview';

import { Container, Title } from './styles';

const OverviewContainer: React.FC = () => {
  return (
    <Container>
      <Title>Overview - Today</Title>

      <Overview 
        info="Page Views"
        value="87"
        socialMedia="Facebook"
        isPositive={true}
        variationPercentage={3} />

      <Overview 
        info="Likes"
        value="52"
        socialMedia="Facebook"
        isPositive={false}
        variationPercentage={2} />

      <Overview 
        info="Likes"
        value="5462"
        socialMedia="Instagram"
        isPositive={true}
        variationPercentage={3} />

      <Overview 
        info="Profile Views"
        value="52k"
        socialMedia="Instagram"
        isPositive={true}
        variationPercentage={1375} />

      <Overview 
        info="Retweets"
        value="117"
        socialMedia="Twitter"
        isPositive={true}
        variationPercentage={303} />

      <Overview 
        info="Likes"
        value="507"
        socialMedia="Twitter"
        isPositive={true}
        variationPercentage={553} />

      <Overview 
        info="Likes"
        value="107"
        socialMedia="Youtube"
        isPositive={false}
        variationPercentage={19} />

      <Overview 
        info="Total Views"
        value="1407"
        socialMedia="Youtube"
        isPositive={false}
        variationPercentage={12} />
    </Container>
  );
}

export default OverviewContainer;