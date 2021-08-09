const catalog = document.querySelector('.catalog');
const catalogNav = document.querySelector('.catalog-nav__wrapper');
const catalogItems = document.querySelectorAll('.catalog__item');
const catalogNavBtn = document.querySelectorAll('.catalog-nav__btn');

//filter start
const filter = () => {
	catalogNav.addEventListener('click', (e) => {
		let target = e.target;
		let filterClass = target.dataset['filter'];
		catalogNavBtn.forEach((el) => {
			el.classList.remove('is-active');
		});
		if (!target.classList.contains('is-active')) {
			target.classList.add('is-active');
		};
		if (target.tagName !== 'BUTTON') {
			return false;
		} else {
			catalogItems.forEach((el) => {
				el.classList.remove('hide-popup');
				if (el.dataset['category'] !== filterClass && filterClass !== 'all') {
					el.classList.add('hide-popup');
				}
			});
		};
	});
};
filter();
//filter end


//catalog start
const catalogForm = (e) => {
	if (catalog === null) { return; }


	catalog.addEventListener("click", (e) => {
		let target = e.target;

		const changeProductSize = () => {
			if (target.classList.contains('product__size')) {
				let productSize = document.querySelectorAll('.product__size');
				productSize.forEach((e) => {
					e.classList.remove('is-active');
				});
				target.classList.add('is-active');

			};
		}
		changeProductSize();

		const changeProductOrderInfo = (target) => {
			let product =target.closest(".catalog__product");
			let order = document.querySelector('.popup-order');
			
			
			let productTitle = product.querySelector('.product__title').textContent;
			let productSize = product.querySelector('.product__size.is-active').textContent;
			let productPrice = product.querySelector('.product__price-value').textContent;
			let productImg = product.querySelector('.product__img').getAttribute('src');
			console.log(productSize)
			order.querySelector('.form__input-title').setAttribute('value',productTitle);
			order.querySelector('.form__input-price').setAttribute('value',productPrice);
			order.querySelector('.form__input-size').setAttribute('value',productSize);

			order.querySelector('.order__info-title').textContent = productTitle;
			order.querySelector('.order__info-price').textContent = productPrice;
			order.querySelector('.order__size').textContent = productSize;
			order.querySelector('.order__img').setAttribute('src',productImg);
		
			
		};
		if (target.classList.contains('product__btn')) {
			e.preventDefault();
			changeProductOrderInfo(target);
		}
	});
};

catalogForm();
//catalog end