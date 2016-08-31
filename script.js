"use strict;"

function generateDesk(){

	var divDesk = document.createElement('div');
	divDesk.setAttribute('id', "desk");
	var parentElem = document.body;
	parentElem.insertBefore(divDesk, parentElem.children[0]);

	var desk = document.getElementById('desk');
	
	for (var i = 1; i <= 8; i++) {
		for (var j = 1; j <= 8; j++) {
			var cell = document.createElement('div');
			if ((i + j) % 2 == 0) {
				cell.className = 'cell whiteCell';
			} else {
				cell.className = 'cell blackCell';
			}
			desk.appendChild(cell);
		}
	}

	function generateNumbers(setClass, position) {
		for (var i = 8; i >= 1; i--) {
			var div = document.createElement('div');
			div.innerHTML = i;
			div.className = 'symbol ' + setClass;
			var cellLeft = document.getElementsByClassName('cell')[position - 8 * i];
			cellLeft.appendChild(div);
		}
	return
	}

	function generateLetters(setClass, position) {
		var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
		for (var i = 1; i <= 8; i++) {
			var div = document.createElement('div');
			div.innerHTML = letters[i - 1];
			div.className = 'symbol ' + setClass;
			var cellLeft = document.getElementsByClassName('cell')[position + i];
			cellLeft.appendChild(div);
		}
	return
	}

	generateNumbers('numbers-left', 64);
	generateNumbers('numbers-right', 71);
	generateLetters('letters-up', -1);
	generateLetters('letters-down', 55);

return
}



function generateFigures(figures, begin, end){
	var arrFigures = ['rook','knight','bishop','queen','king','bishop','knight','rook','pawns','pawns','pawns','pawns','pawns','pawns','pawns','pawns'];

	if (figures == 'whiteFigures') {
		arrFigures[3] = 'king';
		arrFigures[4] = 'queen';
		arrFigures = arrFigures.reverse();
	}
	
	for (var i = end; i >= begin; i--) {
		var figurePlace = document.getElementsByClassName('cell')[i - 1];
		var div = document.createElement('div');
		
		div.className = figures + ' ' + arrFigures[i - begin];
		figurePlace.appendChild(div);
	}
return
}


function iconFigures() {
	var pawns = document.getElementsByClassName('pawns');
	var j = 0;
	for (var i in pawns) {
		console.log(pawns[i]);
	
	}
	return console.log(j);
}

/*
Добавление свойствт
function generateStyle(){
	var style = document.createElement('style');
	style.type = 'text/css';
    style.innerHTML = '#desk { width: 300px; height: 300px; border: 1px solid grey;} .cell {width: 30px; height: 30px;}';
    var head = document.getElementsByTagName("head");
    head[0].appendChild(style);
   // document.getElementsByTagName("head").appendChild(style);
}*/
/* generateStyle();*/


generateDesk();
generateFigures('whiteFigures', 49, 64);
generateFigures('blackFigures', 1, 16);

iconFigures();
console.log(document.body);