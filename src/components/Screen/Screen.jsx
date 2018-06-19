import React from 'react';
import styled from 'react-emotion';

import { isOperator } from '../../utils';

const Operations = styled('div')`
  height: 32px;
  margin: 16px;
  text-align: right;
  font-size: 1.25rem;
  color: ${props => props.theme.screen.operations.primary};
  overflow: hidden;
  white-space: nowrap;
`;

const Expression = styled('div')`
  height: 64px;
  margin: 16px;
  text-align: right;
  font-size: 3rem;
  color: ${props => props.theme.screen.expression.primary};
  overflow: hidden;
`;

const Operator = styled('span')`
  color: ${props => props.theme.screen.operations.secondary};
`;

const Operand = styled('span')`
  color: ${props => props.theme.screen.operations.primary};
`;

export const Screen = ({ operations, expression }) => (
  <React.Fragment>
    <Operations>
      {operations.map(
        (operation, index) =>
          isOperator(operation) ? (
            <Operator key={index}>{operation}</Operator>
          ) : (
            <Operand key={index}>{operation}</Operand>
          )
      )}
    </Operations>
    <Expression>{expression}</Expression>
  </React.Fragment>
);
