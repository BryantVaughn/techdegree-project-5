// Use BaguetteBox
window.addEventListener('load', () => {
	baguetteBox.run('.gallery');
});

// Objects for image details
const imageDetails = [
	{
		img: '01.jpg',
		alt: 'Hay Bales',
		desc:
			'I love hay bales. Took this snap on a drive through the countryside past some straw fields.'
	},
	{
		img: '02.jpg',
		alt: 'Lake',
		desc:
			'The lake was so calm today. We had a great view of the snow on the mountains from here.'
	},
	{
		img: '03.jpg',
		alt: 'Canyon',
		desc:
			'I hiked to the top of the mountain and got this picture of the canyon and trees below.'
	},
	{
		img: '04.jpg',
		alt: 'Iceberg',
		desc:
			'It was amazing to see an iceberg up close, it was so cold but didn’t snow today.'
	},
	{
		img: '05.jpg',
		alt: 'Desert',
		desc:
			'The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.'
	},
	{
		img: '06.jpg',
		alt: 'Fall',
		desc:
			'Fall is coming, I love when the leaves on the trees start to change color.'
	},
	{
		img: '07.jpg',
		alt: 'Plantation',
		desc: 'I drove past this plantation yesterday, everything is so green!'
	},
	{
		img: '08.jpg',
		alt: 'Dunes',
		desc: 'My summer vacation to the Oregon Coast. I love the sandy dunes!'
	},
	{
		img: '09.jpg',
		alt: 'Countryside Lane',
		desc: 'We enjoyed a quiet stroll down this countryside lane.'
	},
	{
		img: '10.jpg',
		alt: 'Sunset',
		desc: 'Sunset at the coast! The sky turned a lovely shade of orange.'
	},
	{
		img: '11.jpg',
		alt: 'Cave',
		desc:
			'I did a tour of a cave today and the view of the landscape below was breathtaking.'
	},
	{
		img: '12.jpg',
		alt: 'Bluebells',
		desc:
			'I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in.'
	}
];

// Grab gallery to add images
const gallery = document.querySelector('.gallery');
let imageHTML;

for (let item of imageDetails) {
	// deconstruct object
	let { img, alt, desc } = item;

	// create structure for each image
	imageHTML = `
	  <a href="photos/${img}" data-caption="${desc}">
	    <img src="photos/thumbnails/${img}" alt="${alt}" />
	  </a>
	`;

	// add anchor and image to gallery
	gallery.innerHTML += imageHTML;
}
