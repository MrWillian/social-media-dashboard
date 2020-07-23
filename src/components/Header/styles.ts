import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  padding: 20px;
  
  background-color: ${props => props.theme.colors.background_header};
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  font-weight: bold;
  font-size: var(--font-size);

  @media(min-width: 800px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
  }
`;

export const Top = styled.div`
  h2 {
    color: ${props => props.theme.colors.text};
    margin-top: 20px;
  }

  span {
    color: ${props => props.theme.colors.text_card};
    margin-top: 5px;
  }
`;

export const Divisor = styled.hr`
  margin-top: 1.5em; 
  margin-bottom: 0.5em; 
  border: 1px solid rgba(255,255,255,.05);
  min-width: 100%;

  @media(min-width: 800px) {
    display: none;
  }
`;

export const ThemeSwitcherContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 100%;

  > span {
    color: ${props => props.theme.colors.text_card};
  }

  @media(min-width: 800px) {
    min-width: 15%;
  }
`;

