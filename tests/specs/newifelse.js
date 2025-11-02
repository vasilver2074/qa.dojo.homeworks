function checkEvenOrOdd(value) {
  if (typeof value !== "number" || isNaN(value)) {
    return"Помилка: введене значення не є числом.";
  }

  if (value % 2 === 0) {
    return"Число парне.";
  } else {
    return"Число непарне.";
  }
}

console.log(checkEvenOrOdd(9));
console.log(checkEvenOrOdd(8));
console.log(checkEvenOrOdd("abc"));

function greetByHour(hour) {
  if (typeof hour !== "number" || isNaN(hour) || hour < 0 || hour > 23) {
    "Помилка: введіть годину від 0 до 23.";
  }

  if (hour < 12) {
    return"Доброго ранку!";
  } else if (hour >= 12 && hour <= 18) {
    return"Доброго дня!";
  } else {
    return"Доброго вечора!";
  }
}

console.log(greetByHour(25));
console.log(greetByHour(7));
console.log(greetByHour(16));
console.log(greetByHour(20));
console.log(greetByHour("abc"));

function checkMark(mark) {
  if (typeof mark !== "number" || isNaN(mark) || mark < 0 || mark > 100) {
    return"Помилка: введіть бал від 0 до 100.";
  }

  if (mark >= 50) {
    return"Тест складено.";
  } else {
    return"Тест не складено.";
  }
}

console.log(checkMark(45));
console.log(checkMark(55));
console.log(checkMark("abc"));

function checkAgeVote(age) {
  if (typeof age !== "number" || isNaN(age) || age < 0 ) {
    return"Помилка: введіть корректний вiк людини";
  }

  if (age < 18) {
    return"Ви ще не можете голосувати.";
  } else {
    return"Ви можете голосувати.";
  }

}

console.log(checkAgeVote(-5));
console.log(checkAgeVote(5));
console.log(checkAgeVote(25));
console.log(checkAgeVote("abc"));

function compareNumbers(a, b) {
  if (typeof a !== "number" || typeof b !== "number" || isNaN(a) || isNaN(b)) {
    return"Помилка: введіть два коректних числа.";
  }

  if (a > b) {
    return"Перше число більше.";
  } else if (a < b) {
    return"Друге число більше.";
  } else {
    return"Числа рівні.";
  }
}

console.log(compareNumbers(8, 10)); 
console.log(compareNumbers(15, 3)); 
console.log(compareNumbers(5, 5));
console.log(compareNumbers("abc"));

function checkTrafficLight(color) {

  const tolowercase = color.toLowerCase();

  if (tolowercase === "зелений") {
    return"Переходьте.";
  } else if (tolowercase === "жовтий") {
    return"Підготуйтеся.";
  } else if (tolowercase === "червоний") {
    return"Зачекайте.";
  } else {
    return"Помилка: невідомий колір світлофора.";
  }
}

console.log(checkTrafficLight("жовтий"));   
console.log(checkTrafficLight("зелений"));  
console.log(checkTrafficLight("червоний")); 
console.log(checkTrafficLight("синій"));

function checkNumber(num) {
  if (typeof num !== "number" || isNaN(num)) {
    return"Помилка: введіть коректне число.";
  }

  if (num > 0) {
    return"Число додатнє.";
  } else if (num < 0) {
    return"Число від’ємне.";
  } else {
    return"Число дорівнює нулю.";
  }
}

console.log(checkNumber(10));   
console.log(checkNumber(-5));   
console.log(checkNumber(0));    
console.log(checkNumber("abc"));