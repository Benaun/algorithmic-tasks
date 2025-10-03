# Evaluate Reverse Polish Notation (Обратная польская нотация)

EN => You are given an array of strings tokens that represents a valid arithmetic expression in Reverse Polish Notation.
</br>Return the integer that represents the evaluation of the expression.
</br>- The operands may be integers or the results of other operations.
</br>- The operators include '+', '-', '\*', and '/'.
</br>- Assume that division between integers always truncates toward zero.

RU => Вам дан массив строк tokens, который представляет валидное арифметическое выражение в обратной польской нотации.
</br>Верните целое число, которое представляет результат вычисления выражения.
</br>- Операндами могут быть целые числа или результаты других операций.
</br>- Операторы включают: '+', '-', '\*', и '/'.
</br>- Предполагается, что деление между целыми числами всегда округляется в сторону нуля (отбрасывается дробная часть).

Input: tokens = ["1","2","+","3","*","4","-"]
</br>Output: 5
</br>Explanation: ((1 + 2) \* 3) - 4 = 5
