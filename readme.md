## Logica

1. **Inizializzazione**: 
   - L'array `images` contiene oggetti con il percorso dell'immagine, il titolo e la descrizione per ogni videogioco.
   - I contenitori del carosello e delle miniature vengono selezionati dal DOM.
   - La variabile `activeIndex` viene inizializzata a 0, rappresentando l'immagine attualmente attiva.

2. **Creazione degli Elementi del Carosello e delle Miniature**: 
   - La funzione `createCarousel` itera sull'array `images`, creando gli elementi del carosello e delle miniature.
   - Ogni elemento del carosello è un `div` con un'immagine di sfondo e una didascalia contenente il titolo e la descrizione.
   - Ogni miniatura è un `div` con un'immagine di sfondo. La miniatura dell'immagine attiva viene evidenziata.

3. **Aggiornamento dell'Indice Attivo**: 
   - La funzione `updateActiveIndex` aggiorna `activeIndex` e rinfresca il carosello e le miniature.
   - La funzione `refreshCarousel` trasla il carosello per mostrare l'immagine attiva.
   - La funzione `refreshThumbnails` aggiorna l'evidenziazione delle miniature.

4. **Event Listeners**: 
   - Event listeners per i pulsanti "next" e "prev" aggiornano `activeIndex` e rinfrescano il carosello e le miniature.
   - Cliccando su una miniatura, l'indice attivo viene aggiornato direttamente e il display viene rinfrescato.

5. **Ciclo Infinito**: 
   - Il carosello supporta un ciclo infinito. Quando il pulsante "next" viene cliccato sull'ultima immagine, il carosello torna alla prima immagine, e viceversa per il pulsante "prev".
