const searchInput = document.querySelector('.search');
const imgGallery = document.querySelectorAll('.gallery a');

const filterImages = (evt) => {
	// check event to see if backspace

	// use previous search state with new key added
	let searchVal = evt.target.value;

	for (let i = 0; i < imgGallery.length; i++) {
		const desc = imgGallery[i].getAttribute('data-caption');
		if (desc.toLowerCase().includes(searchVal.toLowerCase())) {
			imgGallery[i].classList.remove('hidden');
		} else {
			imgGallery[i].classList.add('hidden');
		}
	}
};

searchInput.addEventListener('keyup', filterImages);
