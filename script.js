"use strict";

generateDesk();
generateFigures('whiteFigures', 49, 64);
generateFigures('blackFigures', 1, 16);
generateStyle();
generateButton();
gerenateA1B2div();
generateDivsDelFigures('delBlack', 0);
generateDivsDelFigures('delWhite', 3);

var delFigures = [];
var idDel = 0;
var desk = document.getElementById('desk');


// Мышь
desk.addEventListener('click', function(event){	
	var clickCell = event.target;
	makeCellPink(clickCell);
	// Проверяем если розовый цвет и выводим координаты в специальную область
	if (document.getElementById('pink')) transferCellCode();

	if (clickCell.classList.contains('blackFigures')){
		moveFigureToDelDiv(clickCell, 'black')
	} else if (clickCell.classList.contains('whiteFigures')) {
		moveFigureToDelDiv(clickCell, 'white')
	}
});

// Стрелки
document.addEventListener('keydown',function(event){
	if (document.getElementById('pink')){
		var cellForChange = changePinkCellPlace(event.key);
		makeCellPink(cellForChange);
	}
	else {
		makeCellPink(document.getElementsByClassName('cell')[27]);
	}
	transferCellCode();
});


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
	var figuresArr = ['pawns', 'rook', 'king', 'bishop', 'queen', 'knight'];

	for (var i = 0; i < 6; i++) {
		var figure = document.getElementsByClassName(figuresArr[i]);
		for(var j in figure) {
			
			if (typeof(figure[j]) === 'object') {
				figure[j].style.width = '30px';
				figure[j].style.height = '30px';
		    	figure[j].style.background = 'url(https://raw.githubusercontent.com/Dgordg85/js1/master/chess.png) no-repeat';
		    	
	    		if ((figure[j].classList.contains('whiteFigures') || (figure[j].classList.contains('blackFigures')))) {
		    		if (figure[j].classList.contains('rook')) figure[j].style.backgroundPositionX = '-97px';
			    	if (figure[j].classList.contains('pawns')) figure[j].style.backgroundPositionX = '-248px';
			    	if (figure[j].classList.contains('king')) figure[j].style.backgroundPositionX = '3px';
			    	if (figure[j].classList.contains('queen')) figure[j].style.backgroundPositionX = '-47px';
					if (figure[j].classList.contains('bishop')) figure[j].style.backgroundPositionX = '-147px';
					if (figure[j].classList.contains('knight')) figure[j].style.backgroundPositionX = '-199px';
		    	}

		    	if (figure[j].classList.contains('blackFigures')){
		    		figure[j].style.backgroundPositionY = '-4px';
		    	}


		    	if (figure[j].classList.contains('whiteFigures')){
		    		figure[j].style.backgroundPositionY = '-47px';
		    	}

			}
		}
	}
	// Удаляем буквы из стилей
	var style = document.createElement('style');
	style.type = 'text/css';
    style.innerHTML = style.innerHTML + '.pawns:after, .rook:after, .king:after, .bishop:after, .queen:after, .knight:after { content: \'\';}';
    var head = document.getElementsByTagName("head");
    head[0].appendChild(style);

    var button = document.getElementById('button');
    button.setAttribute('value', "Заменено!");
    button.style.marginLeft = '95px';
    button.setAttribute('disabled', '');
	return
}

function generateStyle(){
	var style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = 'div { text-align: center; vertical-align: center; line-height: 30px; font-family: \"Verdana\",Georgia,Serif; }';     
    style.innerHTML = style.innerHTML + '#desk { width: 240px; height: 240px; border: 15px solid #762e06; border-radius: 7px; }';
    style.innerHTML = style.innerHTML + '.cell { width: 30px; height: 30px; float: left; position: relative; }';
    style.innerHTML = style.innerHTML + '.blackCell { background-color: #c35519; }';
    style.innerHTML = style.innerHTML + '.whiteCell { background-color: #fceccb; }';
    style.innerHTML = style.innerHTML + '.blackFigures { color: black; font-weight: bold; }';
    style.innerHTML = style.innerHTML + '.whiteFigures { color: #cbafce; font-weight: bold; }';
    style.innerHTML = style.innerHTML + '.symbol { position: absolute; line-height: 0px; color: white; font-size: 9px; font-family: \"Verdana\",Georgia,Serif; font-weight: normal; }';
    style.innerHTML = style.innerHTML + '.numbers-left { top: 15px; left: -10px; }';
    style.innerHTML = style.innerHTML + '.numbers-right { top: 15px; right: -10px; transform: rotate(180deg); }';
    style.innerHTML = style.innerHTML + '.letters-up { left: 12px; top: -7px; transform: rotate(180deg); font-size: 8px; }';
    style.innerHTML = style.innerHTML + '.letters-down { left: 12px; bottom: -7px; font-size: 8px; }';
    style.innerHTML = style.innerHTML + '.pawns:after { content: \'П\'; } ';
    style.innerHTML = style.innerHTML + '.rook:after { content: \'Л\'; } ';
    style.innerHTML = style.innerHTML + '.king:after, .knight:after { content: \'К\'; }';
    style.innerHTML = style.innerHTML + '.bishop:after { content: \'C\'; }';
    style.innerHTML = style.innerHTML + '.queen:after { content: \'Ф\'; }';

    var head = document.getElementsByTagName("head");
    head[0].appendChild(style);
}

function generateButton(){
	var button = document.createElement('input');
	button.setAttribute('type', "button");
	button.setAttribute('value', "Заменить буквы картинками");
	button.setAttribute('id', "button");
	button.style.marginTop = '30px';
	button.style.marginLeft = '35px';
	button.setAttribute('onclick', "iconFigures()");
	document.body.insertBefore(button, document.body.children[1]);
}

function gerenateA1B2div() {
	var div = document.createElement('div');

	div.style.position = 'absolute';
	div.style.color = 'red';
	div.style.fontSize = '25px';
	div.style.left = '284px';
	div.style.zIndex = '5';
	div.style.top = '230px';
	div.setAttribute('id', "A1B2");

	document.body.insertBefore(div, document.body.children[0]);
}

function generateDivsDelFigures(id, place){
	var div = document.createElement('div');

	div.style.width = '250px';
	div.style.border = '1px solid grey';
	div.style.height = '91px';
	div.setAttribute('id', id);
	div.style.margin = '10px';

	document.body.insertBefore(div, document.body.children[place]);

}

function transferCellCode() {
	
	var pinkCellNumber = findPinkCellNumber();

	var number = 9 - Math.ceil((pinkCellNumber + 1) / 8);
	var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
	var letter = letters[(pinkCellNumber % 8)];
	
	if (!(letter)) {
		letter = letters[7]
	}
return document.getElementById('A1B2').innerHTML = letter + number;
}

function findPinkCellNumber(){
	var cells = document.getElementsByClassName('cell');
	var i = 0;

	for (var cell in cells) {
		if (cells[cell].getAttribute('id') == 'pink') break;
		i++;
	}
	return i;
}

function changePinkCellPlace(arrow){
	var isChangePinkCell = false;
	var numberPinkCell = findPinkCellNumber();
	switch (arrow) {
		case 'ArrowLeft':
			if (numberPinkCell % 8 === 0 || numberPinkCell === 0) {
				numberPinkCell += 7;
				isChangePinkCell = true;
			}

			if (isChangePinkCell) {
				var cellForChange = document.getElementsByClassName('cell')[numberPinkCell];
			} else {
				cellForChange = document.getElementById('pink').previousElementSibling;
			}
			break;
		case 'ArrowRight':
			if ((numberPinkCell + 1) % 8 === 0) {
				numberPinkCell -= 7;
				isChangePinkCell = true;
			}

			if (isChangePinkCell) {
				cellForChange = document.getElementsByClassName('cell')[numberPinkCell];
			} else {
				cellForChange = document.getElementById('pink').nextElementSibling;
			}
			break;
		case 'ArrowUp':
			if (numberPinkCell < 8) {
				numberPinkCell += 56;
				isChangePinkCell = true;
			}

			if (isChangePinkCell) {
				cellForChange = document.getElementsByClassName('cell')[numberPinkCell];
			} else {
				cellForChange = document.getElementsByClassName('cell')[numberPinkCell];
				for (var i = 0; i < 8; i++) {
					cellForChange = cellForChange.previousElementSibling;;
				}
			}
			break;

		case 'ArrowDown':
			if (numberPinkCell > 55) {
				numberPinkCell -= 56;
				isChangePinkCell = true;
			}

			if (isChangePinkCell) {
				cellForChange = document.getElementsByClassName('cell')[numberPinkCell];
			} else {
				cellForChange = document.getElementsByClassName('cell')[numberPinkCell];
				for (var i = 0; i < 8; i++) {
					cellForChange = cellForChange.nextElementSibling;;
				}
			}
			break;
	}
return cellForChange;
}

function makeCellPink(target) {
	if (target.getAttribute('id') == 'desk') {
		return;
	}

	while (!(target.classList.contains('cell'))){
		target = target.parentNode;
	}

	var previousColor = target.getAttribute('backgroundColor');

	switch(target.getAttribute('id')) {
		case 'pink':
			target.style.backgroundColor = previousColor;
			target.removeAttribute('id');
			document.getElementById('A1B2').innerHTML = '';
			break;
		default:
			var previousPinkCell = document.getElementById('pink');

			if (previousPinkCell) {
				previousPinkCell.style.backgroundColor = previousColor;	
				previousPinkCell.removeAttribute('id');
				document.getElementById('A1B2').innerHTML = '';	
			}
			
			target.style.backgroundColor = '#ffc0cb';
			target.setAttribute('id','pink');
			break;
	}
}


function moveFigureToDelDiv(clickCell, color) {
	var id = 'del' + idDel;
	idDel++;

	delFigures[id] = clickCell;
	clickCell.parentNode.classList.add(id);
	clickCell.setAttribute('id', id);
	clickCell.setAttribute('onclick', "backFigure('" + id + "');");
	clickCell.style.float = 'left';
	clickCell.style.marginRight = '5px';
	if (color == 'white') {
		var delDiv = document.getElementById('delWhite');
	} else {
		var delDiv = document.getElementById('delBlack');
	}
	delDiv.appendChild(clickCell);
return
}

function backFigure(id){
	var divCode = delFigures[id];
	var lastPlace = document.getElementsByClassName(id)[0];
	var delFigure = document.getElementById(id);
	delFigure.style.float = 'none';
	delFigure.style.marginRight = '0px';
	lastPlace.appendChild(delFigure);
return
}