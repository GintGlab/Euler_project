// Следующая повторяющаяся последовательность определена для множества натуральных чисел:

// n → n/2 (n - четное)
// n → 3n + 1 (n - нечетное)

// Используя описанное выше правило и начиная с 13, сгенерируется следующая последовательность:

// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// Получившаяся последовательность (начиная с 13 и заканчивая 1) содержит 10 элементов. Хотя это до сих пор и не доказано (проблема Коллатца (Collatz)), 

// предполагается, что все сгенерированные таким образом последовательности оканчиваются на 1.

// Какой начальный элемент меньше миллиона генерирует самую длинную последовательность?

// Примечание: Следующие за первым элементы последовательности могут быть больше миллиона.

///////// сложность O(n log n)

(function number() {
  console.time()
  let maxSubLength = 0;
  let numWithBigLength = 0;
  for (let i = 1; i < 1000000; i++) {
    const arr = [];
    let number = i;
    while (number != 1) {
      if (number % 2 === 0) {
        number /= 2
        arr.push(number)
      } else {
        number = (number * 3) + 1;
        arr.push(number)
      }
    }
    if (maxSubLength < arr.length) {
      maxSubLength = arr.length
      numWithBigLength = i;
    }
  }
  console.log(maxSubLength,numWithBigLength);
  console.timeEnd()
  return {maxSubLength, numWithBigLength}
})()

