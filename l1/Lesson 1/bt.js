const arrayNumber = [10, -3, 5, -7, 11, -15, -20, 23];
let sum = 0
let count = 0
for (let i = 0; i < arrayNumber.length; i+=2) {
  if (arrayNumber[i] % 2 != 0) {
    sum += arrayNumber[i]
    count++
  }
  
}

let tbc = sum / count
console.log(tbc);
//Tham chiếu và tham trị

// Tìm số lớn nhất trong mảng vừa nhập
let numberMax = arrayNumber[0]; //10
for (let i = 0; i < arrayNumber.length; i++) {
  if (arrayNumber[i] >= numberMax) {
    numberMax = arrayNumber[i];
  }
}
console.log(numberMax);

// Tìm vị trí số nhỏ nhất trong mảng
let numberMin = arrayNumber[0];
for (let i = 0; i < arrayNumber.length; i++) {
  if (arrayNumber[i] <= numberMin) {
    numberMin = arrayNumber[i];
  }
}

for (let i = 0; i < arrayNumber.length; i++) {
  if (arrayNumber[i] == numberMin) {
    console.log(i);
  }
}


