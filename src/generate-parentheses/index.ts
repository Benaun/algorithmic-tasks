function generateParenthesisV1(n: number): string[] {
  if (n < 1) return [""];

  const stack: Array<{ str: string; open: number; close: number }> = [];
  const result: string[] = [];

  stack.push({ str: "", open: 0, close: 0 });

  while (stack.length) {
    const { str, open, close } = stack.pop()!;

    if (str.length === 2 * n) {
      result.push(str);
      continue;
    }

    if (open > close) {
      stack.push({
        str: str + ")",
        open,
        close: close + 1,
      });
    }

    if (open < n) {
      stack.push({
        str: str + "(",
        open: open + 1,
        close,
      });
    }
  }

  return result;
}
// O(4ⁿ / √n) время, O(4ⁿ / √n) память

function generateParenthesisV2(n: number): string[] {
  if (n < 1) return [""];

  const result: string[] = [];

  function backtrack(str: string, open: number, close: number): void {
    if (str.length === 2 * n) {
      result.push(str);
      return;
    }

    if (open < n) {
      backtrack(str + "(", open + 1, close);
    }

    if (close < open) {
      backtrack(str + ")", open, close + 1);
    }
  }

  backtrack("", 0, 0);
  return result;
}
// O(4ⁿ / √n) время, O(4ⁿ / √n) память

console.log(generateParenthesisV2(1)); // ["()"]
console.log(generateParenthesisV2(3)); // ["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParenthesisV2(0)); // ['']
console.log(generateParenthesisV2(-1)); // ['']
