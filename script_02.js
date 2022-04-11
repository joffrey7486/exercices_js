const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 },
    { title: 'Guerre et Prout', id: 748147, rented: 0 }
];

// Sors-moi la liste des titres des livres du CDI
const getBooksTitle = books.map(e => e.title);

// Est-ce que tous les livres ont été empruntés au moins une fois ?
const isAllRented = books.every(e => e.rented > 0);

// Quel est le livre le plus emprunté ?
const mostRented = books.reduce((acc, e) => e.rented > acc.rented ? e : acc);

// Quel est le livre le moins emprunté ?
const leastRented = books.reduce((acc, e) => e.rented < acc.rented ? e : acc);

// Supprime le livre avec l'ID 133712
const removeBook = books.filter(e => e.id !== 133712);