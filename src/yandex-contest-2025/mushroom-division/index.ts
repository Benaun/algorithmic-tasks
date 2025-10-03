function mushroomDivision(mushrooms: number[]): number {
  const vasya: number[] = []; // четные позиции
  const masha: number[] = []; // нечетные позиции

  // Разделяем на грибы Васи и Маши
  for (let i = 0; i < mushrooms.length; i++) {
    if (i % 2 === 0) {
      vasya.push(mushrooms[i]);
    } else {
      masha.push(mushrooms[i]);
    }
  }

  const defaultHappiness =
    vasya.reduce((acc, cur) => acc + cur, 0) -
    masha.reduce((acc, cur) => acc + cur, 0);

  let maxHappiness = defaultHappiness;

  // Сортируем для быстрого поиска оптимальных пар
  vasya.sort((a, b) => a - b);
  masha.sort((a, b) => a - b);

  // Рассматриваем только выгодные обмены

  if (vasya.length && masha.length) {
    const firstSwap = 2 * (masha[masha.length - 1] - vasya[0]);
    maxHappiness = Math.max(maxHappiness, defaultHappiness + firstSwap);
  }

  if (vasya.length && masha.length) {
    const secondSwap = 2 * (masha[0] - vasya[vasya.length - 1]);
    maxHappiness = Math.max(maxHappiness, defaultHappiness + secondSwap);
  }

  const checkCount = Math.min(5, vasya.length, masha.length);
  for (let i = 0; i < checkCount; i++) {
    for (let j = 0; j < checkCount; j++) {
      const swap = 2 * (masha[masha.length - 1 - j] - vasya[i]);
      maxHappiness = Math.max(maxHappiness, defaultHappiness + swap);
    }
  }

  return maxHappiness;
}

console.log(
  mushroomDivision([
    778, 805, 595, 390, 763, 31, 346, 11, 894, 229, 875, 112, 268, 315, 873,
    271, 112, 576, 181, 740, 320, 560, 796, 780, 962, 79, 345, 977, 405, 954,
    323, 99, 861, 152, 298, 995, 650, 702, 12, 257, 110, 775, 742, 629, 897,
    170, 329, 298, 291, 397, 27, 359, 589, 904, 799, 55, 516, 756, 82, 216, 515,
    275, 827, 512, 92, 169, 830, 468, 394, 855, 580, 195, 998, 944, 811, 934,
    900,
  ])
); // 5006

console.log(mushroomDivision([4, 10, 7, 5, 4, 5, 3, 8, 3, 2, 5])); // 10
