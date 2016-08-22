'use strict';
//Задание 1

function min(numberOne, numberTwo){
	if (numberOne > numberTwo) {
		numberOne = numberTwo;
	}
	return numberOne;
}



console.log(min(0, 10));
console.log(min(0, -10));



//Задание 2.1

function countBs(str) {
	str = str.toLowerCase();
	var count = 0;

	for (var i = 0; i < str.length; i++) {
		if (str.charAt(i) == 'в') count++;
	}

	return console.log(count);
}

countBs('Выпили закусили в');

//Задание 2.2

function countChar(str, symbol) {
	str = str.toLowerCase();
	symbol = symbol.toLowerCase();

	symbol = symbol || 'в';
	var count = 0;

	for (var i = 0; i < str.length; i++) {
		if (str.charAt(i) == symbol) count++;
	}

	return console.log('Количество символов ' + symbol + '=' + count);
}

countChar('Выпили закусили в','В');

//Задание 3

function evenOdd(number) {
	switch (number) {
		case 0:
			return console.log('Четное');
		case 1:
			return console.log('Нечетное');
		default:
			(number > 0) ? evenOdd(number - 2) : evenOdd(number + 2);
			break;
	}
}

evenOdd(50);
evenOdd(75);

/* Вызывает переполнение стека вызовов, поэтому если отрицательно нужно прибавлять.*/
evenOdd(-1);

evenOdd(-50);

//Задание 4
(function(w) {
	'use strict';
	var arr = [];
	w.containerPush = function(elem) {
		arr.push(elem);
		return arr.slice(); // Почему просто arr нельзя? Зачем arr.slice???
	}
})(window)