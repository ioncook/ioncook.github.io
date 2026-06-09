// Clean Projects Database
const projects = [
  {
    id: "bike-route-planner",
    title: "Bike Route Planner",
    description: "Plot routes with road cycling, direct/manual, or hiking/mtb routing. View route stats and a grade profile. Click/tap to place a waypoint, right click or hold down to delete one. Heavily inspired by onthegomap.",
    github: "https://github.com/ioncook/bike-route-planner",
    images: [
      "bike route photos/bike1.png",
      "bike route photos/bike2.png",
      "bike route photos/bike3.png",
      "bike route photos/bike4.png"
    ],
    path: "../bike-route-planner/"
  },
  {
    id: "climate-visualizer",
    title: "Climate Visualizer",
    description: "A graphical map visualizer for various climate data, including koppen, temperature, precipitation, wettest/driest month, and era comparison, among others. To change the layer, click on the map to bring up the popup and click an underlined figure to switch the map to that layer.",
    github: "https://github.com/ioncook/climate-visualizer",
    images: [
      "climate visualizer photos/climatevisualizer1.png",
      "climate visualizer photos/climatevisualizer2.png",
      "climate visualizer photos/climatevisualizer3.png",
      "climate visualizer photos/climatevisualizer4.png"
    ],
    path: "../climate-visualizer/"
  },
  {
    id: "eu-political-compass",
    title: "EU Political Compass",
    description: "Political compass placing EU polical parties on social and economic axes using Chapel Hill Expert Survey data. View or compare historical elections, select certain countries/political groups, and show a line of best fit showing the general trend of political leaning within the filters.",
    github: "https://github.com/ioncook/EUPoliticalCompass",
    images: [
      "political compass photos/compass1.png",
      "political compass photos/compass2.png",
      "political compass photos/compass3.png",
      "political compass photos/compass4.png",
      "political compass photos/compass5.png"
    ],
    path: "../EUPoliticalCompass/"
  },
  {
    id: "fire-viewer",
    title: "Fire Viewer",
    description: "Fire history visualizer currently including only CALFIRE data. Filter by size, cause, year, and season. Unfinished as of yet.",
    github: "https://github.com/ioncook/fire-viewer",
    images: [
      "fire viewer photos/fire1.png",
      "fire viewer photos/fire2.png",
      "fire viewer photos/fire3.png"
    ],
    path: "../fire-viewer/"
  },
  {
    id: "koppen-guessr",
    title: "Köppen Guessr",
    description: "A climate guessing game with three modes: Streaks, which requires you to guess the zone of a given city as many times in a row as possible; Photo Sphere, which shows a photo sphere at a random location for 5 rounds; and Data Guesser, which shows you the difference from the answer compared to guesses.",
    github: "https://github.com/ioncook/koppen-guessr",
    images: [
      "koppenguessr photos/guesser1.png",
      "koppenguessr photos/guesser2.png",
      "koppenguessr photos/guesser3.png"
    ],
    path: "../koppen-guessr/"
  },
  {
    id: "your-clock",
    title: "Your Clock",
    description: "Input your date of birth, find out what your upcoming milestones are in various time units.",
    github: "https://github.com/ioncook/your-clock",
    images: [
      "yourclock.png"
    ],
    path: "../your-clock/"
  }
];

function populateProjectsTable() {
  const table = document.getElementById('projects-table');
  if (!table) return;

  table.innerHTML = `
    <tr>
      <th width="30%">Project Name</th>
      <th width="70%">Description &amp; Source</th>
    </tr>
  `;

  projects.forEach(project => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>
        <div class="project-title">
          <a href="${project.path}">${project.title}</a>
        </div>
        ${project.images ? `
          <a href="${project.path}" style="display: block; text-decoration: none;">
            <div class="slideshow-wrapper">
              <div class="slideshow">
                ${project.images.map((img, idx) => `
                  <img src="${img}" class="slide ${idx === 0 ? 'active' : ''}" alt="${project.title} screenshot">
                `).join('')}
              </div>
            </div>
          </a>
        ` : ''}
      </td>
      <td>
        <div class="project-desc">${project.description}</div>
        <div class="view-source-container">
          <a href="${project.path}" style="margin-right: 10px;">view page</a>
          <a href="${project.github}" target="_blank" rel="noopener noreferrer">view source</a>
        </div>
      </td>
    `;

    table.appendChild(row);
  });

  startSlideshows();
}

function startSlideshows() {
  const slideshows = document.querySelectorAll('.slideshow');
  let activeCount = 0;
  slideshows.forEach((slideshow) => {
    const slides = slideshow.querySelectorAll('.slide');
    if (slides.length <= 1) return;

    let currentIdx = 0;
    const delay = activeCount * 1200;
    activeCount++;
    // Delay the start of each slideshow's interval to stagger them
    setTimeout(() => {
      setInterval(() => {
        slides[currentIdx].classList.remove('active');
        currentIdx = (currentIdx + 1) % slides.length;
        slides[currentIdx].classList.add('active');
      }, 3000);
    }, delay);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  populateProjectsTable();
  initQuotes();
});

const jesusQuotes = [
  { ref: "Matthew 11:28", text: "Come unto me, all ye that labour and are heavy laden, and I will give you rest." },
  { ref: "John 14:6", text: "I am the way, the truth, and the life: no man cometh unto the Father, but by me." },
  { ref: "John 8:12", text: "I am the light of the world: he that followeth me shall not walk in darkness, but shall have the light of life." },
  { ref: "Matthew 7:7", text: "Ask, and it shall be given you; seek, and ye shall find; knock, and it shall be opened unto you." },
  { ref: "John 15:13", text: "Greater love hath no man than this, that a man lay down his life for his friends." },
  { ref: "Luke 6:31", text: "And as ye would that men should do to you, do ye also to them likewise." },
  { ref: "Matthew 6:33", text: "But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you." },
  { ref: "John 10:11", text: "I am the good shepherd: the good shepherd giveth his life for the sheep." },
  { ref: "Revelation 22:13", text: "I am Alpha and Omega, the beginning and the end, the first and the last." },
  { ref: "John 11:25", text: "I am the resurrection, and the life: he that believeth in me, though he were dead, yet shall he live." },
  { ref: "Matthew 22:37", text: "Thou shalt love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind." },
  { ref: "John 14:27", text: "Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid." },
  { ref: "Matthew 5:14", text: "Ye are the light of the world. A city that is set on an hill cannot be hid." },
  { ref: "John 15:5", text: "I am the vine, ye are the branches: He that abideth in me, and I in him, the same bringeth forth much fruit: for without me ye can do no thing." },
  { ref: "Matthew 28:20", text: "Teaching them to observe all things whatsoever I have commanded you: and, lo, I am with you alway, even unto the end of the world. Amen." },
  { ref: "Luke 23:34", text: "Father, forgive them; for they know not what they do." },
  { ref: "John 10:10", text: "The thief cometh not, but for to steal, and to kill, and to destroy: I am come that they might have life, and that they might have it more abundantly." },
  { ref: "Matthew 18:20", text: "For where two or three are gathered together in my name, there am I in the midst of them." },
  { ref: "John 8:58", text: "Verily, verily, I say unto you, Before Abraham was, I am." },
  { ref: "John 4:14", text: "But whosoever drinketh of the water that I shall give him shall never thirst; but the water that I shall give him shall be in him a well of water springing up into everlasting life." },
  { ref: "John 14:15", text: "If ye love me, keep my commandments." },
  { ref: "Matthew 19:26", text: "With men this is impossible; but with God all things are possible." },
  { ref: "Luke 12:32", text: "Fear not, little flock; for it is your Father's good pleasure to give you the kingdom." },
  { ref: "John 21:22", text: "If I will that he tarry till I come, what is that to thee? follow thou me." }
];

function loadRandomQuote() {
  const display = document.getElementById('quote-display');
  if (!display) return;
  
  const randomIndex = Math.floor(Math.random() * jesusQuotes.length);
  const quote = jesusQuotes[randomIndex];
  
  display.innerHTML = `
    <span class="quote-citation">${quote.ref}:</span>
    <span class="quote-text">${quote.text}</span>
  `;
}

function initQuotes() {
  const btn = document.getElementById('new-quote-btn');
  if (btn) {
    btn.addEventListener('click', loadRandomQuote);
  }
  loadRandomQuote();
}
