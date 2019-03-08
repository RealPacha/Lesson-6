var doc = document;
var album = doc.querySelector ('.album');
var cells = 7;
var galleryItem = doc.querySelector('.galleryItem').content;
var mainImage = doc.querySelector ('.img');

var renderItems = function () {
	let newItem;
	let roulette = doc.createDocumentFragment ();

	for (let i = 0; i < cells; i++) {

		newItem = galleryItem.cloneNode(true);
		newItem.querySelector('.imgThumb').classList.add('thumb' + i);
		newItem.querySelector('.imgThumb').style.backgroundImage = "url('background-" + (i + 1) + ".JPG')";
		roulette.appendChild(newItem);
	} 

	album.appendChild (roulette);
};

renderItems ();

var galleryApp = function (evt) {
	console.log(evt);
	let el = document.getElementById('#scrollRight');

	if (evt.target.parentElement.className == 'albumWrapper' || evt.target.classList.contains('imgThumb') == true) {
		mainImage.style.backgroundImage = evt.target.style.backgroundImage;
	}

	/*if (evt.target.id == "scrollRight"){
		for(let i = 0; i < cells; i++){ // Я понимаю, что тут должно быть условие, что какая картинка сейчас выделена + 1 по названию, но никак не выходит...
			mainImage.style.backgroundImage = document.querySelector('.img').style.backgroundImage = "url('background-" + (i + 1) + ".JPG')";
		}
		
	}

	if (evt.target.id == "scrollLeft"){
		for(let i = 0; i < cells; i++){ // А тут я понимаю, что тут должно быть условие, что какая картинка сейчас выделена - 1 по названию, но никак не выходит...
			mainImage.style.backgroundImage = document.querySelector('.img').style.backgroundImage = "url('background-" + (i - 1) + ".JPG')";
		}
		
	}*/
};

window.addEventListener ('click', galleryApp);