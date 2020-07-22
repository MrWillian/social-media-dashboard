import React from 'react';
import Header, { Props } from '../../components/Header';
import CardContainer from '../../components/CardContainer';
import OverviewContainer from '../../components/OverviewContainer';

import { Container } from './styles';

const Dashboard: React.FC<Props> = ({ toggleTheme }) => {
    
  return (
    <Container>
      <Header toggleTheme={toggleTheme} />

      <CardContainer />
      <OverviewContainer />
    </Container>
  );
}

export default Dashboard;