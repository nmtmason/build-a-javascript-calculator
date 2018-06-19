import styled from 'react-emotion';

export const Separator = styled('div')`
  margin: 16px;
  border-top: 1px solid ${props => props.theme.separator.primary};
`;
