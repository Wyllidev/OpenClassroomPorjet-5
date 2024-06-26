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

// Récupération des deux flèches (gauche et droite)
const left_slide = document.querySelector('.arrow_left');
const right_slide = document.querySelector('.arrow_right');

// Ajout d'un évènement au click
left_slide.addEventListener('click', () => {
	console.log('coucou flèche de gauche');
});

right_slide.addEventListener('click', () => {
	console.log('coucou flèche de droite');
});

// Ajout des bullet points au slider
const dots = document.querySelector('.dots');
const dot_list = document.querySelector('.dot');

for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement('div');
	dot.className = 'dot';
	dots.appendChild(dot);
}
