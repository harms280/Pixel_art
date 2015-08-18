window.onload = function() {
	createDivs();
	createPalette();
	createColorPicker();
	// assignColor();
	addListener();
};

var body = document.querySelector("body");
var container = document.createElement('div');

var color = "white";
body.style.height = "1010px";


function createDivs() {
	for (var y = 0; y < 30; y++) {
		for (var x = 0; x < 50; x++) {
			var tile = document.createElement('div');
			tile.style.width = "2%";
			tile.style.height= "2%";
			tile.style.float = "left";
			tile.style.boxSizing = "border-box";
			tile.style.border = "1px solid gray";
			body.appendChild(tile);
		}
	}
}

var colorArray = ["red","blue","green","purple","black","yellow","orange","pink","gray","brown"];

function createPalette() {
	for (var i = 0; i < 10; i++) {
		var tile = document.createElement('div');
		tile.style.width = "10%";
		tile.style.height="2%";
		tile.style.float = "left";
		tile.style.boxSizing = "border-box";
		tile.style.border = "1px solid gray";
		tile.classList.add('palette');
		tile.style.marginTop = "20px";
		tile.style.background = colorArray[i];
		tile.addEventListener('click',function() {
			color = this.style.background;
		})
		body.appendChild(tile);
	};
}

function createColorPicker() {
	var tile = document.createElement('div');
	tile.style.width = "10%";
	tile.style.height = "5%";
	tile.style.clear = "both";
	tile.style.position ="block";
	tile.style.margin = "2em auto";
	tile.innerHTML = "<input id='background-color' type='color'/>";
	tile.addEventListener('click',function addListenerPicker() {
	for (var i = 0; i < pixel.length; i++) {
		pixel[i].addEventListener('click',function() {this.style.background = document.getElementById("background-color").value});
	}
	});
	body.appendChild(tile);
}


var palette = document.getElementsByClassName('palette');

// function assignColor() {
// 	for (var i = 0; i < palette.length; i++) {
// 		palette[i].style.background = colorArray[i];
// 		palette[i].addEventListener('click', function() {
// 			color = colorArray[i];
// 		})	
// 	}
// }
// var blue = document.querySelector('div.0').style.background = "blue";

var pixel = document.getElementsByTagName('div');



function addListener() {
	for (var i = 0; i < pixel.length; i++) {
		pixel[i].addEventListener('click',function() {this.style.background = color});
	}
}

