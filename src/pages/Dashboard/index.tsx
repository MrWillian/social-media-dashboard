import React from 'react';

import Header, { Props } from '../../components/Header';

import { Container } from './styles';

const Dashboard: React.FC<Props> = ({ toggleTheme }) => {
    
  return (
    <Container>
      <Header toggleTheme={toggleTheme} />
    </Container>
  );
}

export default Dashboard;