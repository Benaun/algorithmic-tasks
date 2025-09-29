# 3Sum (Сумма трех чисел)

EN => Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] where nums[i] + nums[j] + nums[k] == 0, and the indices i, j and k are all distinct.
</br>The output should not contain any duplicate triplets. You may return the output and the triplets in any order.

RU => Дан массив целых чисел nums. Верните все тройки [nums[i], nums[j], nums[k]], где nums[i] + nums[j] + nums[k] == 0, и индексы i, j и k все различны.
</br>Вывод не должен содержать дублирующихся троек. Вы можете вернуть вывод и тройки в любом порядке.

Example 1:
</br>Input: nums = [-1,0,1,2,-1,-4]
</br>Output: [[-1,-1,2],[-1,0,1]]

Explanation:
</br>nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
</br>nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
</br>nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
</br>The distinct triplets are [-1,0,1] and [-1,-1,2].

Example 2:
</br>Input: nums = [0,1,1]
</br>Output: []

Example 3:
</br>Input: nums = [0,0,0]
</br>Output: [[0,0,0]]
