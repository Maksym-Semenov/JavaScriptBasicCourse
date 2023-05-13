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

	if (calendarDaysCount <= deadLine) {
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
	let g = null;
	console.log(g);
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

	if (canBuy) {
		console.log('You can buy it');
	} else if (money > 5) {
		console.log('You buy mini product');
	}
	else {
		console.log('Can`t buy');
	}
}

// Chapter 5 Lesson 21 Task Складний процент накопичень
{
	const capital = 12000;
	const persent = 0.07;
	let numberMonth = 24;

	let result = capital * Math.pow(1 + (persent / numberMonth), (numberMonth * 2));
	console.log(result);
	console.log(result + capital);


	function calculateCompoundInterest(PV, r, n, t) {
		let FV = PV * Math.pow(1 + (r / n), n * t);
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

// Chapter 5 Lesson 22 Оператори рівності
{
	const secretNumber = 7;
	if (secretNumber === 7) {
		console.log('Вгадав точно');
	}
	if (secretNumber == 7) {
		console.log('Вгадав неточно');
	}

	/*const q = prompt('Введіть число')
	if(q == 7){
		console.log('Hey');
	}*/
}

// Chapter 5 Lesson 23 Switch
{
	const role = 'manager';
	if (role === 'manager') {
		console.log('Менеджер');
	} else if (role === 'admin') {
		console.log('Адмін');
	}

	switch (role) {
		case 'manager':
			console.log('Менеджер');
			break;
		case 'admin':
			console.log('Адмін');
			break;
		case 'ceo':
			console.log('СЕО');
			break;
		default:
			console.log('Я тебе не знаю');

	}

	switch (role) {
		case 'manager':
		case 'admin':
			console.log('Не керівник');
			break;
		case 'ceo':
			console.log('Керівник');
			break;
		default:
			console.log('Я тебе не знаю');
	}

	const num = 1;
	switch (true) {
		case num > 0:
			console.log('Додатній');
			break;
		case num < 0:
			console.log('Від`ємний');
			break;
		default:
			console.log('Нуль');
	}
}

// Chapter 5 Lesson 24 Тернарні оператори
{
	const BMVX3Price = 100000;
	const fordFocusPrice = 10000;
	const budget = 2007000;

	let message = '123';

	if (budget > 100000)
		message = "BMW";
	else if (budget > fordFocusPrice) {
		message = 'Ford';
	} else {
		message = 'Байк';
	}

	console.log('Я хочу купити');
	console.log(`Я хочу купити ${message}`);

	budget > 100000 ? console.log('BMW') : console.log('Ford');

	const str = budget > 100000 ? 'BMW' : 'Ford';
	console.log(str);
	console.log(`Я можу придбати + ${budget > BMVX3Price ? 'BMW,' : 'Ford,'}`);



}

// Chapter 5 Lesson 25 Task
{
	//const question = prompt`Яка буде відповідь`
}

// Chapter 5 Lesson 27 Оператори логіки
{
	const isAdmin = false;
	const canWrite = true;
	console.log(`Системний файл ${isAdmin && canWrite}`);
	console.log(`Звичайний файл ${isAdmin || canWrite}`);
}

// Chapter 5 Lesson 30 Task
{
	const balance = 1000;
	const bonusBalance = 90;

	const isBunned = true;
	const isExist = true;
	const isSelling = true;

	const result = ((balanse > 1000 || bonusBalance > 100) && (isBunned && isExist && isSelling));
	console.log(result);

}