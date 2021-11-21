const mainProgram = document.getElementById('cards-container');
const featureSpeakers = document.getElementById('speakers');
const menuButton = document.querySelector('.sm-header');
const menu = document.querySelector('.menuContainer');
const closeButton = document.querySelector('.closeButton');
const container = document.querySelector('.container');

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('isActive');
  menu.classList.toggle('isActive');
  container.classList.toggle('menuActive');
  document.body.style.overflow = 'hidden';
});

closeButton.addEventListener('click', () => {
  menuButton.classList.remove('isActive');
  menu.classList.remove('isActive');
  container.classList.remove('menuActive');
  document.body.style.overflow = 'scroll';
});

const speakers = [
  {
    id: 1,
    image: './assets/speaker.jpg',
    name: 'Chris Hadfield',
    brief: 'retired Canadian Space Agency astronaut',
    work: 'Hadfield has flown two Space Shuttle missions and served as commander of the International Space Station.',
  },
  {
    id: 2,
    image: './assets/speaker2.jpg',
    name: 'Elon Musk',
    brief: 'He is the founder, CEO, and Chief Engineer at SpaceX',
    work: ' founder of The Boring Company; and co-founder of Neuralink and OpenAI.',
  },
  {
    id: 3,
    image: './assets/speaker3.jpg',
    name: 'Helen Sharman',
    brief: 'British chemist and astronaut',
    work: 'first Western European woman and first privately funded woman in space.',
  },
  {
    id: 4,
    image: './assets/speaker4.jpg',
    name: 'Buzz Aldrin',
    brief: 'American former astronaut, engineer and fighter pilot.',
    work: 'ldrin made three spacewalks as pilot of the 1966 Gemini 12 mission, and, as Lunar Module Eagle pilot on the 1969 Apollo 11 mission',
  },
];

const mainProgramCards = [
  {
    id: 1,
    icon: './assets/main1.png',
    title: 'Lecture',
    description:
      'Listen to the speakers from various countries about the messages of sharing and opening',
  },
  {
    id: 2,
    icon: './assets/main2.png',
    title: 'CC Exhibtion',
    description:
      'Appreciate various creation applying CC license of experts organized from EAS@ ',
  },
  {
    id: 3,
    icon: './assets/main3.png',
    title: 'Forum',
    description:
      'Have the time to share your thoughts and opinions with experts for each topic',
  },
  {
    id: 4,
    icon: './assets/main4.png',
    title: 'Workshop',
    description:
      'Try creating your own work using open source license rather than just watching',
  },
  {
    id: 5,
    icon: './assets/main5.png',
    title: 'CC Ignite',
    description:
      'Get opportunities to network with CC affiliates around the world, also after the summit',
  },
];

const addMainProgram = () => {
  mainProgramCards.map((item) => {
    const cards = `
    <div class="program-card ">
        <img src='${item.icon}' alt="test" />
        <h3>${item.title}</h3>
        <p>
          ${item.description}
        </p>
      </div>`;
    return mainProgram.insertAdjacentHTML('beforeend', cards);
  });
};

window.onload = addMainProgram();

const addSpeakers = () => {
  speakers.map((item) => {
    const speakerCard = `<div class="speaker-card">
        <div class="speaker">
          <img
            src="../assets/chessPattern.jpg"
            alt="chessPattern"
            class="backgroundChess"
          />
          <img src='${item.image}' alt="person" class="speaker-img" />
        </div>
        <div class="speaker-Info">
          <h5>${item.name}</h5>
          <p class="basic-info">${item.brief}</p>
          <hr />
          <p class="secondary-info">
        ${item.work}
          </p>
        </div>
      </div>`;
    return featureSpeakers.insertAdjacentHTML('beforeend', speakerCard);
  });
};

window.onload = addSpeakers;
