import React from 'react';
import Header, { Props } from '../../components/Header';
import CardContainer from '../../components/CardContainer';

import { Container } from './styles';

const Dashboard: React.FC<Props> = ({ toggleTheme }) => {
    
  return (
    <Container>
      <Header toggleTheme={toggleTheme} />

      <CardContainer />
    </Container>
  );
}

export default Dashboard;