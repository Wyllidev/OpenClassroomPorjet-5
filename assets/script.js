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

for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement('div');
	dot.className = 'dot';
	dots.appendChild(dot);
}

// Ajout de la class dot_selected au premier point
const dot_list = document.querySelectorAll('.dot');
if (dot_list.length > 0) {
	dot_list[0].classList.add('dot_selected');
}

// Création variable pour indiquer que lorsqu'on arrive sur la page l'index du carrousel est au début
let index = 0;

// Sélection des images et du texte du carrousel
const carouselImage = document.querySelector('.banner-img');
let carouselTagline = document.querySelector('.banner-text');

// Fonction pour mettre à jour l'image et le texte du carrousel
function updateCarousel() {
	// Mise à jour de l'image
	carouselImage.src = 'assets/images/slideshow/' + slides[index].image;
	// Mise à jour du texte
	carouselTagline.innerHTML = slides[index].tagLine;
	// Roulement des Bullet Points
	for (let dot_index = 0; dot_index < dot_list.length; dot_index++) {
		dot_list[dot_index].classList.remove('dot_selected');
	}
	dot_list[index].classList.add('dot_selected');
}

// Evènement au clic sur les flèches
left_slide.addEventListener('click', () => {
	if (index >= slides.length - 1) {
		index = 0;
	} else {
		index = index + 1;
	}
	updateCarousel(index);
});

right_slide.addEventListener('click', () => {
	if (index <= 0) {
		index = slides.length - 1;
	} else {
		index = index - 1;
	}
	updateCarousel();
});
