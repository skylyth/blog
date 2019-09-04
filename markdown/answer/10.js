let obj = { 1: 222, 2: 123, 5: 888 };
const result = Array.from({ length: 12 }).map((_, index) => obj[index + 1] || null);
console.log(result)

Array.from({ length: 12 }, (v, i) => ({ 1: 222, 2: 123, 5: 888 }[i + 1]) || null)
