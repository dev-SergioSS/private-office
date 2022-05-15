//  ^ slider

const btnL = document.querySelector('.btn-left')
const btnR = document.querySelector('.btn-right')

const sliderRow = document.querySelector('[data-slider-row]')
const slides = sliderRow.querySelectorAll('[data-slider-item]')
const slidesCount = sliderRow.querySelectorAll('[data-slider-item]').length

let count = 1;
let slidesOnWindow;

btnL.addEventListener('click', () => { changeSlide('left') })
btnR.addEventListener('click', () => { changeSlide('right') })


function changeSlide(el) {

	// длина одного слайда
	const widthSlide = document.querySelector('[data-slider-item]').offsetWidth

	// длина всех слайдов (всего контейнера)
	let widthAll = widthSlide * slidesCount

	// количество видимых слайдов в контейнере
	slidesOnWindow = Math.round(sliderRow.offsetWidth / widthSlide)


	if (el === 'left') {
		if (count > 1) {
			count--
			let newSlidePos = (count - 1) * widthSlide
			sliderRow.style.left = `-${newSlidePos}px`
		}
	}


	else if (el === 'right') {

		// Если в контейнере 1 слайд

		if (slidesOnWindow === 1) {

			if (count < slidesCount) {
				count++
				let newSlidePos = (count - 1) * widthSlide
				sliderRow.style.left = `-${newSlidePos}px`
				setButtons()
			}
			// else if (count == slidesCount) {
			// 	setLastButtons(last = false)
			// }
		}

		// Если в контейнере 2 слайда

		else if (slidesOnWindow === 2) {
			if (count < slidesCount - 1) {
				count++
				let newSlidePos = (count - 1) * widthSlide
				sliderRow.style.left = `-${newSlidePos}px`
			}

		}

		// Если в контейнере 3 слайда

		else if (slidesOnWindow === 3) {
			if (count < slidesCount - 2) {
				count++
				let newSlidePos = (count - 1) * widthSlide
				sliderRow.style.left = `-${newSlidePos}px`
			}

		}
		// 4
		else if (slidesOnWindow === 4) {
			if (count < slidesCount - 3) {
				count++
				let newSlidePos = (count - 1) * widthSlide
				sliderRow.style.left = `-${newSlidePos}px`
			}

		}

		else if (slidesOnWindow === 5) {
			if (count < slidesCount - 4) {
				count++
				let newSlidePos = (count - 1) * widthSlide
				sliderRow.style.left = `-${newSlidePos}px`
			}
		}

	}

	setButtons(slidesOnWindow)
}


window.addEventListener('resize', () => {
	sliderRow.style.left = 0
	count = 0
	setButtons()
	console.log('hi');
})

function setButtons(slidesOnWindow) {
	if (slidesCount < 2) {
		btnL.classList.remove('slider-btn_active')
		btnR.classList.remove('slider-btn_active')
	} else if (count == 1) {
		btnL.classList.remove('slider-btn_active')
		btnR.classList.add('slider-btn_active')

	} else if (count > 1 && count < slides.length) {
		btnL.classList.add('slider-btn_active')
		btnR.classList.add('slider-btn_active')

	}
	else if (slidesCount - 1 == slidesOnWindow) {
		btnL.classList.add('slider-btn_active')
		btnR.classList.remove('slider-btn_active')
	}

}
setButtons()