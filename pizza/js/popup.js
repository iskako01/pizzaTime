const productBtn = document.querySelectorAll('.product__btn');
const popup = document.querySelectorAll('.popup');
const popupCloseBtn = document.querySelectorAll('.btn-close');
const popupDataOrder = document.querySelector(`.popup[data-popup="popup-order"]`);
const bodyHide = document.querySelector('body');


productBtn.forEach((elem) => {
	elem.addEventListener('click', (e) => {
		let target = e.target;
		if (target) {
			popupDataOrder.classList.add('is-active');
			bodyHide.classList.add('hide');
		}
	});
});

const closePopup = () => {
	bodyHide.addEventListener('click', (e) => {
		if (e.target.classList.contains('popup__inner')) {
			popup.forEach((el) => { el.classList.remove('is-active'); })
			bodyHide.classList.remove('hide');
		}
	});
	popupCloseBtn.forEach((el) => {
		el.addEventListener('click', (e) => {
			if (e.target) {
				popup.forEach((el) => { el.classList.remove('is-active'); })
				bodyHide.classList.remove('hide');
			}
		});
	});
}
closePopup();
