function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
}

 const pets = [
  {
    img: 'dogs.jpg',
    name: 'Sir Waggington',
    type: 'Dog',
    age: '3 years',
    personality: 'Friendly, Loyal💙'
  },
  {
    img: 'cat.jpg',
    name: 'Queen Whiskers',
    type: 'Cat',
    age: '2 years',
    personality: 'Curious✨, Graceful🕊️'
  },
  {
    img: 'rabbit.jpg',
    name: 'Captain Nibbles',
    type: 'Rabbit',
    age: '1.5 years',
    personality: 'Gentle💐, Playful😇'
  }
];

let currentIndex = 0;

const bffCard = document.getElementById('bff-card');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

function displayPet(index) {
  const pet = pets[index];
  bffCard.innerHTML = `
    <img src="${pet.img}" alt="${pet.name}">
    <div class="pet-details">
      <h3>${pet.name}</h3>
      <p><strong>Type:</strong> ${pet.type}</p>
      <p><strong>Age:</strong> ${pet.age}</p>
      <p><strong>Personality:</strong> ${pet.personality}</p>
      <button class="adopt-btn" onclick="alert('You have chosen to adopt ${pet.name}! 🎉')">Adopt Me</button>
    </div>
  `;
}

displayPet(currentIndex);

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % pets.length;
  displayPet(currentIndex);
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + pets.length) % pets.length;
  displayPet(currentIndex);
});