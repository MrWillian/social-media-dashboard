import React, { useState } from 'react';

import { Container, Switcher } from './styles';

interface Props {
  onChange(): void;
  isChecked?: boolean;
}

const Switch: React.FC<Props> = ({ 
  onChange, isChecked
}) => {
  const [checked, setChecked] = useState(isChecked);

  const onClick = () => {
    onChange();
    setChecked(!checked);
  }

  return (
    <Container
      className={checked ? 'checked' : ''}>
      
      <Switcher 
        aria-label="switch"
        onClick={onClick} />

    </Container>
  );
}

export default Switch;
