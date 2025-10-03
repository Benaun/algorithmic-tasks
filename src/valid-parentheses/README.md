Valid Parentheses

# Valid Parentheses (Валидный скобки)

EN => You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.
</br>The input string s is valid if and only if:
</br>- Every open bracket is closed by the same type of close bracket.
</br>- Open brackets are closed in the correct order.
</br>- Every close bracket has a corresponding open bracket of the same type.
</br>Return true if s is a valid string, and false otherwise.

RU => Вам дана строка s, состоящая из следующих символов: (, ), {, }, [ и ].
</br>Входная строка s является валидной тогда и только тогда, когда:
</br>-Каждая открывающая скобка закрывается скобкой того же типа.
</br>-Открывающие скобки закрываются в правильном порядке.
</br>-У каждой закрывающей скобки есть соответствующая открывающая скобка того же типа.
</br>Верните true, если строка s является валидной, и false в противном случае.

Example 1:
</br>Input: s = "[]"
</br>Output: true

Example 2:
</br>Input: s = "([{}])"
</br>Output: true

Example 3:
</br>Input: s = "[(])"
</br>Output: false
