import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Switch from '../Switch';

import { 
  Container,
  Top,
  Divisor,
  ThemeSwitcherContainer
} from './styles';

export interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext);

  return (
    <Container>
      <Top>
        <h2>Social Media Dashboard</h2>
        <span>Total Followers: 23,004</span>
      </Top>

      <Divisor />

      <ThemeSwitcherContainer>
        <span>
          {title === 'dark' ? 'Dark' : 'Light'} Mode
        </span>

        <Switch
          onChange={toggleTheme}
          isChecked={title === 'dark'}
        />

      </ThemeSwitcherContainer>
    </Container>
  );
}

export default Header;