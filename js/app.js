document.addEventListener('DOMContentLoaded', function () {
  var handlers = {
    $display: undefined,
    $longDisplay: undefined,
    expression: '',
    longExpression: '',
    result: undefined,
    memory: '',
    checkForFunctions: function (value) {
      return /AC|MS|MR/g.test(value);
    },
    checkForOperators: function (value) {
      return /[+\-*/]/g.test(value);
    },
    clearDisplayOfOperator: function () {
      if (this.checkForFunctions(this.expression)) {
        this.expression = '';
        this.longExpression = '';
      }
      if (this.checkForOperators(this.expression)) {
        this.expression = '';
      }
    },
    digit: function (value) {
      if (this.result) {
        this.clear();
      }
      this.clearDisplayOfOperator();
      this.expression = this.expression + value;
      this.longExpression = this.longExpression + value;
      this.updateDisplays();
    },
    decimal: function (value) {
      if (this.result) {
        this.clear();
      }
      this.clearDisplayOfOperator();
      var digit = /[.]/g;
      if (!digit.test(this.expression)) {
        this.expression = this.expression + value;
      }
      this.updateDisplays();
    },
    operator: function (value) {
      this.expression = value;
      if (this.result) {
        this.longExpression = this.result + value;
        this.result = undefined;
      } else {
        this.longExpression = this.longExpression + value;
      }
      this.updateDisplays();
    },
    equals: function (value) {
      this.result = eval(this.longExpression);
      this.expression = this.result;
      this.longExpression = this.longExpression + value + this.result;
      this.updateDisplays();
    },
    clear: function () {
      this.result = undefined;
      this.expression = '';
      this.longExpression = '';
      this.updateDisplays();
    },
    store: function (value) {
      if (!this.checkForFunctions(this.expression) && !this.checkForOperators(this.expression)) {
        this.memory = this.expression;
        this.expression = value;
        this.longExpression = value;
        this.updateDisplays();
      }
    },
    recall: function (value) {
      if (this.memory) {
        this.expression = value;
        this.expression = this.longExpression = this.memory;
        this.updateDisplays();
      }
    },
    registerDisplay: function ($element) {
      this.$display = $element;
    },
    registerLongDisplay: function ($element) {
      this.$longDisplay = $element;
    },
    updateDisplay: function (expression) {
      this.$display.innerHTML = expression;
    },
    updateLongDisplay: function (expression) {
      this.$longDisplay.innerHTML = expression;
    },
    updateDisplays: function () {
      this.$display.innerHTML = this.expression;
      this.$longDisplay.innerHTML = this.longExpression;
    }
  };

  var app = Object.create(handlers);
  app.registerHandler = function (element) {
    var fn = this[element.dataset.type];
    var value = element.dataset.value;
    element.addEventListener('click', fn.bind(this, value));
  };
  app.registerHandlers = function (elements) {
    elements.forEach(this.registerHandler.bind(this));
  };
  app.registerHandlers(document.querySelectorAll('.button'));
  app.registerDisplay(document.querySelector('.display'));
  app.registerLongDisplay(document.querySelector('.long-display'));
});
