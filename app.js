projects = [
    {
        image: "images/japan.jpg",
        title: "Project 1"
    },
    {
        image: "images/japan.jpg",
        title: "Project 2"
    },
    {
        image: "images/japan.jpg",
        title: "Project 3"
    },
    {
        image: "images/japan.jpg",
        title: "Project 4"
    },
    {
        image: "images/japan.jpg",
        title: "Project 5"
    },
    {
        image: "images/japan.jpg",
        title: "Project 6"
    },
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

pictures = ["images/japan.jpg"];


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


