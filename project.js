// Projects section.
let projects = [
    {
        image: "images/biblequiz.png",
        title: "Bible Quiz Website",
        description: "This is a website that I made when I found an interest in learning more about front-end development. \
        Since I enjoy reading the Bible, I knew I could make it into a website quiz using HTML, CSS, and JavaScript. In general, \
        it's a Bible quiz testing your knowledge of the Word of God, with the intention to learn and have fun! Looking to implement\
        frameworks/libraries to enhance user experience, like React, Tailwind, etc.",
        url: "https://wilhenalbertohm.github.io/BibleQuiz/"
    },
    {
        image: "images/keras.JPG",
        title: "Neural Network Training with Keras",
        description: "Trained a neural network on 4000 train samples and 1000 test samples using Keras to evaluate \
        collaborative performance on 20 chefs on projects. I also utilized a Sequential model to specify the neural network: input to output layers through hidden layers \
        in between and trained the model with various number of epochs and batch sizes for testing purposes. \
        At the end, I calculated the prediction accuracy of the neural network and reported metrics (e.g., tasks, completion, monetary gains/losses).",
        url: ""
    },
    {
        image: "images/physicsgrade.JPG",
        title: "Grade Calculator",
        description: "A command-line based program that calculates the final grade for a Physics 1 class that I was in. \
        I made this Java program to share it with my classmates through Discord, as grades were unknown, and I thought it would be fun to hear \
        feedback from others regarding my code and how I can improve. I used an ArrayList data structure instead of a regular array to learn more about data structures.",
        url: "https://github.com/WilhenAlbertoHM/GradeCalculator"
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

    const projectDesc = document.createElement("h4");
    projectDesc.classList.add("projects-desc");
    projectDesc.textContent = project.description;

    projectItem.appendChild(projectTitle);
    projectItem.appendChild(projectDesc);
    return projectItem;
}

// Get the project grid element.
const projectGrid = document.getElementById("projects-grid");

// Add project items to the grid.
projects.forEach(project => {
    const projectItem = createProjectGrids(project);
    projectGrid.appendChild(projectItem);
});