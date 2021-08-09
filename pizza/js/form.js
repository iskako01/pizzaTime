// inputMask
let inputs = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+420 (999) 99-99-99');
im.mask(inputs);
//validate
const popupSuccess = document.querySelector('.popup-thanks');
function validateForms(selector, rules) {
	new window.JustValidate(selector, {
		rules: rules,
		submitHandler: function (form, values, ajax) {
			let formData = new FormData(form);
			const popupIsActive = document.querySelector('.popup.is-active')
			console.log(popupIsActive)
			if (popupIsActive) {
				popupIsActive.classList.remove('is-active');
			}
			
			fetch("mail.php",{
				method:"POST",
				body:formData
			})
			.then(function(data){
				console.log(data);
				console.log('Sent');
				popupSuccess.classList.add('is-active');
				form.reset();
			})
		}
	});
}

validateForms('.form', { email: { required: true, email: true }, 'name': { required: true }, 'tel': { required: true } });