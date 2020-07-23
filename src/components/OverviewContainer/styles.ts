import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 30px;

  @media(min-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }

  @media(min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const Title = styled.h2`
  margin: 20px;
  color: ${props => props.theme.colors.text};

  @media(min-width: 500px) {
    grid-column: span 2;
  }

  @media(min-width: 800px) {
    grid-column: span 4;
  }
`;
