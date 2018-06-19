import styled from 'react-emotion';

export const ThemeButton = styled('button')`
  display: block;
  margin: 0 auto;
  border: none;
  font-size: 0.9rem;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  color: rgb(170, 170, 170);
  background-color: transparent;
  outline: none;

  &:hover {
    text-decoration: underline;
  }
`;
