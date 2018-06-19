import styled from 'react-emotion';

const Button = styled('button')`
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  font-size: 1.25rem;
  background-color: transparent;
  outline: none;

  &:hover {
    border: 1px solid ${props => props.theme.button.hover.primary};
  }
`;

export const FunctionButton = styled(Button)`
  color: ${props => props.theme.button.function.primary};
`;

export const NumberButton = styled(Button)`
  color: ${props => props.theme.button.number.primary};
`;

export const OperatorButton = styled(Button)`
  color: ${props => props.theme.button.operator.primary};
`;

export const EmptyButton = styled(Button)`
  &:hover {
    border: none;
  }
`;

export const EqualsButton = styled(Button)`
  height: 48px;
  width: 48px;
  margin: 8px;
  border: 1px solid ${props => props.theme.button.equals.primary};
  border-radius: 32px;
  box-shadow: 3px 7px 7px
    ${props => props.theme.button.equals.primaryWithOpacity};
  color: ${props => props.theme.button.equals.secondary};
  background-color: ${props => props.theme.button.equals.primary};

  &:hover {
    border: none;
    background-color: ${props => props.theme.button.equals.hover};
  }
`;
