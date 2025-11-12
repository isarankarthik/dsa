/**
 * @param {string[]} tokens
 * @return {number}
 */

function evaluateReversePolishNotation(tokens)
{
    let arithmeticOperation = new Set(["+", "-", "*", "/"]);
    let stack = [];
    for (let i = 0; i<tokens.length; i++)
    {
        if (!arithmeticOperation[i].has(tokens[i]))
        {
            stack.push(Number(tokens[i]));
        } else {
            let a = stack.pop();
            let b = stack.pop();
            let result = 0;
            switch (tokens[i])
            {
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
                    result = Math.floor(b) / Math.floor(a);
                    result = result < 0 ? Math.ceil(result) : Math.floor(result);
                    break;
            }
            stack.push(result);
        }
    }
    return stack.pop();
}