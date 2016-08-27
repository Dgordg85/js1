'use strict';

//Задание 1
console.log('Задание 1');

function color16(first, second, third) {

	first = first || 0;
	second = second || first;
	third = third || second;

	var str = '#';

	if (!checkColor(first) || !checkColor(second) || !checkColor(third)) return console.log('Ошибка');

	function checkColor(color) {
			//Проверка на число, и что не строка вида '255'
			if (typeof(color) !== 'string' && !isNaN(parseFloat(color)) && isFinite(color)) {
				//Проверка на диапазон 0..255
				if (color < 0 || color > 255) return false;
			} else return false;
			// преобразуем в 16-ную систему и делаем большие символы, добавляем к строке
			str += ('0' + color.toString(16).toUpperCase()).substr(-2);
			return str;
		}
	return console.log(str);
}

color16(255, 5, 30);

//Задание 2
console.log('Задание 2');

function numberToObject(number){
	//Проверка на число, и что не строка вида '999'

	var object = {};

	var isNumberTrueNumberOrFalse = (typeof(number) !== 'string' && !isNaN(parseFloat(number)) && isFinite(number))
	if (isNumberTrueNumberOrFalse === false) {
		return console.log('Не число!');
	}
		//Проверка на диапазон 0..999
	if (number < 0) return console.log('Число меньше 0');

	if (number > 999) return console.log('Число больше 999 ' + {});

	(function(){
		switch (String(number).length) {
			case 3:
				object['\'сотни\''] = String(number).charAt(2);
			case 2:
				object['\'десятки\''] = String(number).charAt(1);
			case 1:
				object['\'единицы\''] = String(number).charAt(0);
		}
		return
	})()
	return object;
}

console.log(numberToObject(257));

//Задание 3
console.log('Задание 3');

var object = numberToObject(257);

function objectToQueryString(object){
	var str = "";

	(function(){
		for (var i in object) {
			str +='&amp;' + i + '=' + object[i];
		}
		str = str.substring(5);
		return
	})()
	return console.log(str);
}

objectToQueryString(object);

//Задание 4
console.log('Задание 4');

function extend(object) {
	var copyObject = {};
	(function(){
		for (var i in object) {
			copyObject[i] = object[i];
		}
		return
	})()
	return copyObject;
}


var copyObject = {};

var numberObject = numberToObject(355);

copyObject = extend(numberObject);

copyObject['id'] = 577;

console.log(copyObject);
console.log(numberObject);
