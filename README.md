# [Build a JavaScript Calculator](https://www.freecodecamp.com/challenges/build-a-javascript-calculator)

Part of the [freecodecamp](https://www.freecodecamp.com) curriculum.

## Objective

Objective: Build a CodePen.io app that is functionally similar to this: https://codepen.io/FreeCodeCamp/full/rLJZrA/.

1. User Story: I can add, subtract, multiply and divide two numbers.
2. User Story: I can clear the input field with a clear button.
3. User Story: I can keep chaining mathematical operations together until I hit the equal button, and the calculator will tell me the correct output.

## Solution

* Built using [Sass](http://sass-lang.com/) and [Normalize.css](https://necolas.github.io/normalize.css/).
* This solution is built for mobile first and will display correctly across all browser sizes.
* A calculator is created with buttons and two displays.
* The top display will show the current operation, the bottom display will show a history of chained operations.
* Basic memory funcionality is implemented with the Memory Store (MS) and Memory Recall (MR) buttons.
* The solution relies upon data attributes to tie the HTML to the JavaScript. Data attributes determine which operations to run when a calculator button is pressed.
* Eval is used to parse the chain of operations and display a result.

## Development tools

The following tools were used in development:

* Yarn / npm scripts in package.json.
* [eslint](https://github.com/eslint/eslint) and [semistandard](https://github.com/Flet/semistandard) to lint JavaScript files.
* [node-sass](https://github.com/sass/node-sass) to compile Sass files to CSS.
* [browser-sync](https://github.com/Browsersync/browser-sync) to push CSS changes to the browser.
* [onchange](https://github.com/Qard/onchange) to implement watch functionality.
* [npm-run-all](https://github.com/mysticatea/npm-run-all) to run a series of Yarn / npm background scripts in parallel.

Inspiration taken from [Why npm Scripts?](https://css-tricks.com/why-npm-scripts/) on [CSS-Tricks](https://css-tricks.com).
