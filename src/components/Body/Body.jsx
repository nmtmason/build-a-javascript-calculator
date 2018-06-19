import styled from 'react-emotion';

export const Body = styled('div')`
  width: 320px;
  margin: 64px auto;
  border-radius: 16px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1), 15px 15px 30px rgba(0, 0, 0, 0.2);
  padding: 32px 32px 32px 32px;
  font-family: Consolas, Monaco, monospace;
  background-color: ${props => props.theme.body.backgroundColor};
`;
