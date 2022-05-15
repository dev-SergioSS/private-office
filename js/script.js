//  // --------------------------- WEBP ---------------------------

function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support === true) {
		document.querySelector('html').classList.add('webp');
	} else {
		document.querySelector('html').classList.add('no-webp');
	}
});

// ---------------------------MOBILE MENU---------------------------


const iconMenu = document.querySelector('.menu-button');
const menuList = document.querySelector('[data-list-links]');
const menuLink = document.querySelectorAll('[menu-link]');

if (iconMenu != null) {
	iconMenu.addEventListener('click', function () {
		iconMenu.classList.toggle("active");
		menuList.classList.toggle("active");
		lockBody("lock");
	});
};

for (link of menuLink) {
	link.addEventListener('click', () => {
		iconMenu.classList.remove("active");
		menuList.classList.remove("active");
		lockBody("unlock");
	})
}

function lockBody(action) {

	// function need for 1)mobile menu 2) popup

	const body = document.querySelector('body')

	if (action == "lock") {
		body.classList.toggle('lock')
	}
	else if (action == "unlock") {
		body.classList.remove('lock')
	}
}

//  ^ slider

// const btnL = document.querySelector('.btn-left')
// const btnR = document.querySelector('.btn-right')

// const sliderRow = document.querySelector('.slider-row')
// const slides = sliderRow.querySelectorAll('.slider-item')
// const slidesCount = sliderRow.querySelectorAll('.slider-item').length

// let count = 1;

// btnL.addEventListener('click', () => { changeSlide('left') })
// btnR.addEventListener('click', () => { changeSlide('right') })


// function changeSlide(el) {

// 	// длина одного слайда
// 	const widthSlide = document.querySelector('.slider-item').offsetWidth

// 	// длина всех слайдов (всего контейнера)
// 	let widthAll = widthSlide * slidesCount

// 	if (el === 'left') {
// 		if (count > 1) {
// 			count--
// 			let newSlidePos = (count - 1) * widthSlide
// 			sliderRow.style.left = `-${newSlidePos}px`
// 		}
// 	}


// 	else if (el === 'right') {

// 		if (count < slidesCount) {
// 			count++
// 			let newSlidePos = (count - 1) * widthSlide
// 			sliderRow.style.left = `-${newSlidePos}px`
// 		}
// 		else if (count == slidesCount) {
// 			count == slidesCount;
// 			// count = 1
// 			// sliderRow.style.left = '0px'
// 		}
// 	}

// 	setButtons()
// }


// window.addEventListener('resize', () => {

// 	const widthSlide = document.querySelector('.slider-item').offsetWidth

// 	slides.forEach(item => {
// 		item.style.width = '100%'
// 	})

// 	// калибровка начального слайда при ресайзе 
// 	sliderRow.style.left = `-${widthSlide * (count - 1)}px`
// })

// function setButtons() {
// 	if (slidesCount < 2) {
// 		btnL.classList.remove('slider-btn_active')
// 		btnR.classList.remove('slider-btn_active')
// 	} else if (count == 1) {
// 		btnL.classList.remove('slider-btn_active')
// 		btnR.classList.add('slider-btn_active')

// 	} else if (count > 1 && count < slides.length) {
// 		btnL.classList.add('slider-btn_active')
// 		btnR.classList.add('slider-btn_active')

// 	} else if (count == slides.length) {
// 		btnL.classList.add('slider-btn_active')
// 		btnR.classList.remove('slider-btn_active')
// 	}
// 	console.log(slidesCount);
// }
// setButtons()






