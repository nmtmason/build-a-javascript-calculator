import React, { Component } from 'react';

import { Body } from './Body';
import { Screen } from './Screen';
import { Separator } from './Separator';
import { Buttons } from './Buttons';

import { isOperator, containsDecimal } from '../utils';

let initialState = {
  expression: '0',
  operations: '0',
  evaluated: false
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'CLEAR':
      return {
        ...initialState
      };
    case 'NUMBER': {
      let lastExpression = state.expression;
      let lastOperations = state.operations;
      let expression = lastExpression + action.number;
      let operations = lastOperations + action.number;

      if (state.evaluated) {
        expression = action.number;
        operations = action.number;
      } else if (lastExpression === '0') {
        expression = action.number;
        operations = lastOperations.slice(0, -1) + action.number;
      } else if (isOperator(lastExpression)) {
        expression = action.number;
      }

      return {
        ...state,
        expression,
        operations
      };
    }
    case 'DECIMAL': {
      let lastExpression = state.expression;
      let lastOperations = state.operations;
      let expression = lastExpression + '.';
      let operations = lastOperations + '.';

      if (state.evaluated) {
        expression = '0.';
        operations = '0.';
      } else if (containsDecimal(lastExpression)) {
        expression = lastExpression;
        operations = lastOperations;
      }

      return {
        ...state,
        expression,
        operations,
        evaluated: false
      };
    }
    case 'OPERATOR': {
      let lastExpression = state.expression;
      let lastOperations = state.operations;
      let expression = action.operator;
      let operations = lastOperations + action.operator;

      if (state.evaluated) {
        operations = lastExpression + action.operator;
      } else if (isOperator(lastExpression)) {
        operations = lastExpression;
      }

      return {
        ...state,
        expression,
        operations,
        evaluated: false
      };
    }
    case 'EQUALS': {
      let lastExpression = state.expression;
      let lastOperations = isOperator(lastExpression)
        ? state.operations.slice(0, -1)
        : state.operations;

      // eslint-disable-next-line no-eval
      let expression = eval(lastOperations);
      let operations = lastOperations + '=' + expression;

      return {
        ...state,
        expression,
        operations,
        evaluated: true
      };
    }
    default:
      return state;
  }
};

export class Calculator extends Component {
  state = reducer();

  handleClear = event => {
    this.setState(state => reducer(state, { type: 'CLEAR' }));
  };

  handleNumber = number => event => {
    this.setState(state => reducer(state, { type: 'NUMBER', number }));
  };

  handleDecimal = event => {
    this.setState(state => reducer(state, { type: 'DECIMAL' }));
  };

  handleOperator = operator => event => {
    this.setState(state => reducer(state, { type: 'OPERATOR', operator }));
  };

  handleEquals = event => {
    this.setState(state => reducer(state, { type: 'EQUALS' }));
  };

  render() {
    return (
      <Body>
        <Screen
          operations={this.state.operations.split(/([+\-*/])/g)}
          expression={this.state.expression}
        />
        <Separator />
        <Buttons
          onClear={this.handleClear}
          onNumber={this.handleNumber}
          onDecimal={this.handleDecimal}
          onOperator={this.handleOperator}
          onEquals={this.handleEquals}
        />
      </Body>
    );
  }
}
