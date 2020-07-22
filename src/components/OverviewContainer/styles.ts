import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 30px;
`;

export const Title = styled.h2`
  margin: 20px;
  color: ${props => props.theme.colors.text};
`;