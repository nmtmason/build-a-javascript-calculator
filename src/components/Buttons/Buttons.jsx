import React from 'react';
import styled from 'react-emotion';

import {
  FunctionButton,
  OperatorButton,
  NumberButton,
  EqualsButton,
  EmptyButton
} from '../Button';

const Container = styled('div')`
  display: flex;
  flex-wrap: wrap;
  margin: 16px 0;
`;

export const Buttons = ({
  onClear,
  onNumber,
  onDecimal,
  onOperator,
  onEquals
}) => (
  <Container>
    <FunctionButton onClick={onClear}>C</FunctionButton>
    <EmptyButton />
    <EmptyButton />
    <OperatorButton onClick={onOperator('/')}>/</OperatorButton>
    <NumberButton onClick={onNumber('7')}>7</NumberButton>
    <NumberButton onClick={onNumber('8')}>8</NumberButton>
    <NumberButton onClick={onNumber('9')}>9</NumberButton>
    <OperatorButton onClick={onOperator('*')}>*</OperatorButton>
    <NumberButton onClick={onNumber('4')}>4</NumberButton>
    <NumberButton onClick={onNumber('5')}>5</NumberButton>
    <NumberButton onClick={onNumber('6')}>6</NumberButton>
    <OperatorButton onClick={onOperator('+')}>+</OperatorButton>
    <NumberButton onClick={onNumber('1')}>1</NumberButton>
    <NumberButton onClick={onNumber('2')}>2</NumberButton>
    <NumberButton onClick={onNumber('3')}>3</NumberButton>
    <OperatorButton onClick={onOperator('-')}>-</OperatorButton>
    <EmptyButton />
    <NumberButton onClick={onNumber('0')}>0</NumberButton>
    <FunctionButton onClick={onDecimal}>.</FunctionButton>
    <EqualsButton onClick={onEquals}>=</EqualsButton>
  </Container>
);
