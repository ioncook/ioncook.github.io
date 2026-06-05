// Clean Projects Database
const projects = [
  {
    id: "bike-route-planner",
    title: "Bike Route Planner",
    description: "Plot routes with road cycling, direct/manual, or hiking/mtb routing. View route stats and a grade profile. Heavily inspired by onthegomap.",
    github: "https://github.com/ioncook/bike-route-planner",
    images: [
      "bike route photos/bike1.png",
      "bike route photos/bike2.png"
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

document.addEventListener('DOMContentLoaded', populateProjectsTable);
