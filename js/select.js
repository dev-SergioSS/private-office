let select = document.querySelectorAll('.select');
let selectHeader = document.querySelectorAll('.select__btn');
let selectItem = document.querySelectorAll('.select__item');


selectHeader.forEach(item => {
	item.addEventListener('click', openList)
});

selectItem.forEach(item => {
	item.addEventListener('click', chooseElement)
});

window.addEventListener('click', (e) => {
	if (!e.target.closest('.select')) {
		select.forEach(el => {
			el.classList.remove('open')
		})
	}
})


function openList() {
	let parent = this.closest('.select')

	if (parent.classList.contains('open')) {
		parent.classList.remove('open')
	}

	else {
		select.forEach(el => {
			el.classList.remove('open')
		})
		parent.classList.add('open')
	}
}

function chooseElement() {
	let elementText = this.innerText
	let parent = this.closest('.select')
	let headText = parent.querySelector('.select__current');
	headText.innerText = elementText;
	parent.classList.remove('open');

}

