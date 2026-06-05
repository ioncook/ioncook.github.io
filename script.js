// Clean Projects Database
const projects = [
  {
    id: "bike-route-planner",
    title: "Bike Route Planner",
    description: "An interactive mapping tool for plotting cycling routes and visualizing steepness profiles and elevation changes.",
    github: "https://github.com/ioncook/bike-route-planner",
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
    title: "Fire Activity Viewer",
    description: "A map-based dashboard showing current active forest fires, coordinate listings, and hazard containment zones.",
    github: "https://github.com/ioncook/fire-viewer",
    path: "../fire-viewer/"
  },
  {
    id: "koppen-guessr",
    title: "Köppen Guessr",
    description: "A geography trivia game challenging players to identify regions based on their Köppen-Geiger climate class indicators.",
    github: "https://github.com/ioncook/koppen-guessr",
    path: "../koppen-guessr/"
  },
  {
    id: "your-clock",
    title: "Your Clock",
    description: "A custom analog and digital timepiece visualizer supporting multiple timezones and structural designs.",
    github: "https://github.com/ioncook/your-clock",
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
          <div class="slideshow-wrapper">
            <div class="slideshow">
              ${project.images.map((img, idx) => `
                <img src="${img}" class="slide ${idx === 0 ? 'active' : ''}" alt="${project.title} screenshot">
              `).join('')}
            </div>
          </div>
        ` : ''}
      </td>
      <td>
        <div class="project-desc">${project.description}</div>
        <div class="view-source-container">
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
  slideshows.forEach((slideshow, index) => {
    const slides = slideshow.querySelectorAll('.slide');
    if (slides.length <= 1) return;

    let currentIdx = 0;
    // Delay the start of each slideshow's interval to stagger them
    setTimeout(() => {
      setInterval(() => {
        slides[currentIdx].classList.remove('active');
        currentIdx = (currentIdx + 1) % slides.length;
        slides[currentIdx].classList.add('active');
      }, 3000);
    }, index * 1200);
  });
}

document.addEventListener('DOMContentLoaded', populateProjectsTable);
