// Projects section.
let projects = [
    {
        image: "images/biblequiz.png",
        title: "Bible Quiz Website"
    },
    {
        image: "images/numofislands.jpg",
        title: "Number of Islands"
    }, 
    {
        image: "images/tictactoe.JPG",
        title: "Tic Tac Toe"
    },
    {
        image: "images/physicsgrade.JPG",
        title: "Grade Calculator"
    },
    {
        image: "images/github.jpg",
        title: "More details on GitHub...",
        url: "https://github.com/WilhenAlbertoHM"
    }
];

// Iteratively create image grids for the "Projects" section.
function createProjectGrids(project) {
    const projectItem = document.createElement("div");
    projectItem.classList.add("projects-item");
    
    const projectImage = document.createElement("img");
    projectImage.classList.add("projects-img");
    projectImage.src = project.image;
    projectItem.appendChild(projectImage);

    const projectTitle = document.createElement("h3");
    projectTitle.classList.add("projects-title");
    projectTitle.textContent = project.title;
    projectImage.addEventListener("click", function() {
        window.location.assign(project.url);
    });
    projectItem.appendChild(projectTitle);

    return projectItem;
}

// Get the project grid element.
const projectGrid = document.getElementById("projects-grid");

// Add project items to the grid.
projects.forEach(project => {
    const projectItem = createProjectGrids(project);
    projectGrid.appendChild(projectItem);
});

// Gallery section.
let pictures = ["images/coolsunset.jpg", "images/jfklib.jpg", 
    "images/montreal.jpg", "images/night.jpg", "images/nightumb2.jpg", 
    "images/quincycenter.jpg", "images/sunset.jpg", "images/sunset2.jpg", "images/sunsetumb.jpg",
    "images/sunsetwater.jpg", "images/toronto.jpg", "images/towertoronto.jpg", "images/trees.jpg", 
    "images/uhall.jpg", "images/umbday.jpg"];


// Iteratively create image grids for the "Gallery" section.
function createGalleryGrids(image) {
    const galleryItem = document.createElement("div");
    galleryItem.classList.add("gallery-item");
    
    const galleryImage = document.createElement("img");
    galleryImage.classList.add("gallery-img");
    galleryImage.src = image;
    galleryItem.appendChild(galleryImage);
    return galleryItem;
}

// Get the project grid element.
const galleryGrid = document.getElementById("gallery-grid");

// Add project items to the grid.
for (let picture = 0; picture < pictures.length; picture++) {
    const galleryItem = createGalleryGrids(pictures[picture]);
    galleryGrid.appendChild(galleryItem);
}

// When one of the nav bar links is clicked, page will scroll down to
// the desired section.
function scrollToSection() {
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            document.querySelector(event.target.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}


