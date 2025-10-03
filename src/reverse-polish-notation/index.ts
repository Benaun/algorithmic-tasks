function evalRPN(tokens: string[]): number {
  const stack: number[] = [];

  for (const token of tokens) {
    const numberedToken: number = parseInt(token);
    if (!isNaN(numberedToken)) {
      stack.push(numberedToken);
    } else {
      const secondEl: number | undefined = stack.pop();
      const firstEl: number | undefined = stack.pop();

      if (firstEl === undefined || secondEl === undefined) {
        throw new Error("Invalid RPN expression");
      }

      switch (token) {
        case "+":
          stack.push(firstEl + secondEl);
          break;
        case "-":
          stack.push(firstEl - secondEl);
          break;
        case "*":
          stack.push(firstEl * secondEl);
          break;
        case "/":
          stack.push(Math.trunc(firstEl / secondEl));
          break;
      }
    }
  }

  return stack[0];
}
// O(n) время, O(n) память

console.log(evalRPN(["1", "2", "+", "3", "*", "4", "-"])); // 5
console.log(evalRPN(["1", "2", "+", "3", "*", "4", "-", "-"])); // "Invalid RPN expression"
