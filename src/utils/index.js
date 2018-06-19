export const isOperator = value => /^[+\-*=/]$/.test(value);
export const containsDecimal = value => /[.]/.test(value);
