// Task: Converter WorkDays-CalendarDays
{
const bid = 80;
let deadLine = 11;
let workHours = 5;
let workDays = 5;
let weekends = 7 - workDays;
let timeForTask = 40;
let workDaysCount = timeForTask / workHours
let mySalary = bid * timeForTask;
let isOpportunity = false;

let a = timeForTask / (workDays * workHours)

let weeksCount = Math.trunc(a);

let calendarDaysCount = (weeksCount * workDays) + (weeksCount * weekends) + (workDaysCount % 5);

if(calendarDaysCount <= deadLine){
	isOpportunity = true;
	console.log('Я зроблю цю роботу за ' + mySalary + ' долларів');
}

console.log(calendarDaysCount);
console.log('Чи встигну я? - ' + isOpportunity);

}

// Chapter 4 Lesson 17-19
{
let age = 18;

console.log(age + 5);
console.log(age - 3);
console.log(age / 3);
console.log(age * 4);
console.log(String(4) + 7);
console.log(Boolean(''));
console.log(typeof NaN);

a = 2 + '10';
console.log(a - 10);

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(Number('sx')));
}

// Chapter 5 Lesson 20
{
const money = 45;
const canBuy = money > 50;

if(canBuy){
	console.log('You can buy it');
}else if(money > 5){
	console.log('You buy mini product');
}
else{
	console.log('Can`t buy');
}
}

// Chapter 5 Lesson 21 Task Складний процент накопичень
{
	const capital = 12000;
	const persent = 0.07;
	let numberMonth = 24;

	let result = capital * Math.pow(1 + (persent / numberMonth),(numberMonth * 2));
	console.log(result);
	console.log(result + capital);


	function calculateCompoundInterest(PV, r, n, t) {
  let FV = PV * Math.pow(1 + (r/n), n*t);
  return FV.toFixed(2); // округляем до двух знаков после запятой
}

// Пример использования функции
let PV = 12000; // текущая стоимость инвестиции
let r = 0.07; // годовая процентная ставка (6%)
let n = 24; // проценты начисляются ежемесячно
let t = 2; // срок инвестирования в годах
let FV = calculateCompoundInterest(PV, r, n, t); // вычисляем будущую стоимость инвестиции
console.log("Будущая стоимость инвестиции: $" + FV);

}









