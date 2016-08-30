"use strict;"

//Задание 1
console.log('Задание 1');

function arrayToList(arr){
	var list = null;

	for (var i = arr.length - 1; i >= 0; i--) {
		list = prepend(arr[i], list);
	}
	return list;	
}

function listToArray(list){
	var i = 0;
	var arr = [];
	var elem = nth(list, i);

	while (elem !== undefined) {
		arr.push(elem);
		i++;
		elem = nth(list, i);
	}
return arr;
}

function prepend(elem, object){
	var rest = {};
	object = object || {};
	rest.value = elem;
	rest.rest = object;
return rest;
}

function nth(list, position){
	if (position < 0) {
		return undefined;
	}

	var i = -1;

	while (i < position) {

		if (list === null) {
			return  undefined;
		}

		var result = list.value;
		list = list.rest;
		i++;
	}
return result;
}

function objToStr(obj){
	var newobj = {};
	Object.assign(newobj, obj);
	newobj.toString = function() {
		return JSON.stringify(this);
		}
	return '' + newobj;
}

console.log(objToStr(arrayToList([10, 20])));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray({value: 10, rest: {value: 20, rest: {value: 30, rest: null}}}));
// → [10, 20, 30]
console.log(objToStr(prepend(10, prepend(20, null))));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

//Задание 2
console.log('Задание 2');

// С конца добавляем элементы в новый массив
function reverseArray(arr) {
	var newArr = [];
	for (var i = arr.length - 1; i >= 0; i--) {
		newArr.push(arr[i]);
	}
return newArr;
}

var arr = [10, 20, 30, 40, 50];
var arr2 = reverseArray(arr);
console.log(arr);
console.log(arr2);

// Работаем до середины и меняем элементы друг с другом.
function reverseArrayInPlace(arr){
	
	var arrMiddle = Math.ceil(arr.length / 2) - 1;
	var idLastElem = arr.length - 1;

	for (var i = 0; i <= arrMiddle; i++) {
		var tempElem = arr[i];
		
		//Меняем элементы местами
		arr[i] = arr[idLastElem - i];
		arr[idLastElem - i] = tempElem;
	}

return arr;
}

arr = reverseArrayInPlace(arr);
console.log(arr);

//Задание 3
console.log('Задание 3');

function pick(obj, keys) {
	// пробегаемся по объекту
	for(var key in obj) {
		var indexOfKey = keys.indexOf(key);
		if (indexOfKey != -1) delete obj[keys[indexOfKey]];
	}
return obj;
}

var user = {
    name: 'Sergey',
    age: 30,
    email: 'sergey@gmail.com',
    friends: ['Sveta', 'Artem']
}

var keys = ['name', 'friends', 'address'];

console.log(objToStr(pick(user,keys)));