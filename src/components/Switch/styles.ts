import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 50px;
  height: 25px;
  border-radius: 50px;
  background: var(--light-toggle);
  
  &.checked {
    justify-content: flex-start;
    background: rgb(55,143,230);
    background: -moz-linear-gradient(36deg, rgba(55,143,230,1) 0%, rgba(62,218,130,1) 100%, rgba(255,255,255,1) 100%);
    background: -webkit-linear-gradient(36deg, rgba(55,143,230,1) 0%, rgba(62,218,130,1) 100%, rgba(255,255,255,1) 100%);
    background: linear-gradient(36deg, rgba(55,143,230,1) 0%, rgba(62,218,130,1) 100%, rgba(255,255,255,1) 100%);
  }
`;

export const Switcher = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.background};
  margin: 3px;

  border: 0;
  outline: 0;
  cursor: pointer;
`;
