/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];
  let operationSet = new Set(["+", "-", "*", "/"]);
  for (let i = 0; i < tokens.length; i++) {
    if (!operationSet.has(tokens[i])) {
      stack.push(Number(tokens[i]));
    } else {
      let result = 0;
      let a = stack.pop();
      let b = stack.pop();
      switch (tokens[i]) {
        case "+":
          result = Math.floor(b) + Math.floor(a);
          break;
        case "-":
          result = Math.floor(b) - Math.floor(a);
          break;
        case "*":
          result = Math.floor(b) * Math.floor(a);
          break;
        case "/":
          result = Math.trunc(b / a);
          break;
      }
      stack.push(Number(result));
    }
  }
  return stack.pop();
};
