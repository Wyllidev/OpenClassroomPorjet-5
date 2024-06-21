const slides = [
	{
		image: 'slide1.jpg',
		tagLine: 'Impressions tous formats <span>en boutique et en ligne</span>',
	},
	{
		image: 'slide2.jpg',
		tagLine:
			'Tirages haute définition grand format <span>pour vos bureaux et events</span>',
	},
	{
		image: 'slide3.jpg',
		tagLine: 'Grand choix de couleurs <span>de CMJN aux pantones</span>',
	},
	{
		image: 'slide4.png',
		tagLine: 'Autocollants <span>avec découpe laser sur mesure</span>',
	},
];

// Création variable pour faire tourner le tableau
let index_slides = 0;

// Récupération de l'élément banner, des images
let banner = document.getElementById('banner');
let banner_img = document.getElementsByClassName('banner-img');

console.log('banner_img');

// Récupération de la flèche de gauche
const left_slide = document.getElementsByClassName('arrow_left');

// Ajout de l'évènement au click
left_slide[0].addEventListener('click', () => {
	if (index_slides > 0) {
		index_slides = index_slides - 1;
	} else {
		index_slides = slides.length - 1;
	}
	console.log(`index_slides: ${index_slides}`);
});
