const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const carouselInner = document.querySelector('.carousel-inner'); // Seleziona il contenitore interno del carosello
const thumbnails = document.getElementById('thumbnails'); // Seleziona il contenitore delle miniature
let activeIndex = 0; // Imposta l'indice attivo iniziale su 0

// Funzione per creare gli elementi del carosello e le miniature
const createCarousel = () => {
    images.forEach((item, index) => {
        // Crea un elemento del carosello
        const carouselItem = document.createElement('div');
        carouselItem.className = 'carousel-item';
        carouselItem.style.backgroundImage = `url(${item.image})`;
        carouselItem.innerHTML = `<div class="carousel-caption">
                                      <h5>${item.title}</h5>
                                      <p>${item.text}</p>
                                  </div>`;
        carouselInner.appendChild(carouselItem); // Aggiunge l'elemento del carosello al contenitore
        // Crea un elemento miniatura
        const thumbnailItem = document.createElement('div');
        thumbnailItem.className = 'thumbnail-item';
        thumbnailItem.style.backgroundImage = `url(${item.image})`;
        if (index === activeIndex) {
            thumbnailItem.classList.add('active'); // Imposta la miniatura attiva
        }
        thumbnailItem.addEventListener('click', () => {
            updateActiveIndex(index); // Aggiorna l'indice attivo al click sulla miniatura
        });
        thumbnails.appendChild(thumbnailItem); // Aggiunge la miniatura al contenitore
    });
};

// Funzione per aggiornare l'indice attivo e rinfrescare il carosello e le miniature
const updateActiveIndex = (index) => {
    activeIndex = index; // Aggiorna l'indice attivo
    refreshCarousel(); // Rinfresca il carosello
    refreshThumbnails(); // Rinfresca le miniature
};

// Funzione per rinfrescare il carosello in base all'indice attivo
const refreshCarousel = () => {
    carouselInner.style.transform = `translateX(-${activeIndex * 100}%)`; // Trasla il carosello orizzontalmente
};

// Funzione per rinfrescare le miniature in base all'indice attivo
const refreshThumbnails = () => {
    thumbnails.querySelectorAll('.thumbnail-item').forEach((thumbnail, index) => {
        if (index === activeIndex) {
            thumbnail.classList.add('active'); // Imposta la miniatura attiva
        } else {
            thumbnail.classList.remove('active'); // Rimuove la classe attiva dalle altre miniature
        }
    });
};

// Event listener per il pulsante "next"
document.getElementById('next-btn').addEventListener('click', () => {
    activeIndex = (activeIndex + 1) % images.length; // Incrementa l'indice attivo, ciclando all'inizio se necessario
    updateActiveIndex(activeIndex); // Aggiorna l'indice attivo
});

// Event listener per il pulsante "prev"
document.getElementById('prev-btn').addEventListener('click', () => {
    activeIndex = (activeIndex - 1 + images.length) % images.length; // Decrementa l'indice attivo, ciclando alla fine se necessario
    updateActiveIndex(activeIndex); // Aggiorna l'indice attivo
});

// Inizializza il carosello
createCarousel();
refreshCarousel(); // Imposta la posizione iniziale del carosello