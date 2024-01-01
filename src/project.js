// Projects section.
let projects = [
    {
        image: "/images/sloanresearch.png",
        title: "Generative Model for Attention Patterns Linked to Personality Traits",
        techstack: "Python (scikit-learn, Keras), OpenFace",
        description: "This is my current research at UMass Boston's VR Lab, led by Professor Funda Durupinar Babur. \
        My role involves in automating the extraction of eye gaze and head/neck rotation data from 6,000 videos, and \
        from the data, I use it to train a generative model using OpenFace, Python, scikit-learn, and Keras to predict personality information, \
        which follows the Big Five personality traits (OCEAN - Openness, Conscientiousness, Extroversion, Agreeableness, and Neuroticism). \
        The image is from OpenFace's GitHub, illustrating facial landmark extraction from videos/images.",
        url: ""
    },
    {
        image: "/images/biblequiz.png",
        title: "Bible Quiz Website",
        techstack: "HTML, CSS, JavaScript",
        description: "This is a website that I made when I found an interest in learning more about front-end development. \
        Since I enjoy reading the Bible, I knew I could make it into a website quiz using HTML, CSS, and JavaScript. In general, \
        it's a Bible quiz testing your knowledge of the Word of God, with the intention to learn and have fun!",
        url: "https://github.com/WilhenAlbertoHM/BibleQuiz"
    },
    {
        image: "/images/keras.JPG",
        title: "Chefs' Performance Prediction",
        techstack: "Python (Keras, scikit-learn)",
        description: "Trained a neural network on 4000 train samples and 1000 test samples using Keras to evaluate \
        collaborative performance on 20 chefs. I utilized a Sequential model to specify the neural network, training the model \
        with 200 epochs and a batch size of 32. I achieved a 72% prediction accuracy on test data and 68% on training data. \
        At the end, I reported metrics on number of complete/incomplete tasks and monetary gains/losses.",
        url: "https://github.com/WilhenAlbertoHM/Chefs-Performance-Neural-Network"
    },
    {
        image: "/images/graphbox.png",
        title: "GraphBox",
        techstack: "Roblox Studio, Lua scripting",
        description: 
        "A Roblox game created by my team and I for our computer graphics course, featuring two custom games: GObby! and BoxDash. Play as one of five characters, \
        including group members and our Professor Daniel Haehn. Overcome obstacles in GObby and navigate three difficult levels in BoxDash, avoiding falling into destruction. \
        Developed using Roblox Studio with Lua scripting and models made by the Roblox community. \
        The game is available to play on Roblox and the instructions are on my GitHub repository.",
        url: "https://github.com/WilhenAlbertoHM/GraphBox"
    },
    {
        image: "/images/tweets.png",
        title: "K-Nearest Neighbors & Naïve Bayes Tweets Classification",
        techstack: "Python (scikit-learn)",
        description: "These two projects come from my Codecademy course: 'Build a Machine Learning Model with Python'. \
        The first project uses K-Nearest Neighbors to predict whether a tweet will go viral or not based on the length of the tweet, \
        and the number of followers and friends. \
        The second project uses Naïve Bayes to classify any tweet and predict whether a given tweet came from New York, London, or Paris. \
        This one involves a count vectorizer, which turns our list of words into count vectors that determine the frequency of each word. \
        These two projects helped me understand more about supervised learning and data preprocessing.",
        url: "https://github.com/WilhenAlbertoHM/Tweets-Classification"
    },
    {
        image: "/images/github.jpg",
        title: "More details on GitHub...",
        url: "https://github.com/WilhenAlbertoHM"
    }
];

// Iteratively create image grids for the "Projects" section.
function createProjectGrids(project) {
    // Create a div element for the project item.
    const projectItem = document.createElement("div");
    projectItem.classList.add("projects-item");

    // Create an image element for the project item.
    const projectImage = document.createElement("img");
    projectImage.classList.add("projects-img");
    projectImage.src = project.image;

    // Create a title element for the project item.
    const projectTitle = document.createElement("h3");
    projectTitle.classList.add("projects-title");
    projectTitle.textContent = project.title;
    projectImage.addEventListener("click", function() {
        window.location.assign(project.url);
    });

    // Create a tech stack element for the project item.
    const projectTechStack = document.createElement("h3");
    projectTechStack.classList.add("projects-techstack");
    
    // If the project has a tech stack, then display it.
    if (project.techstack !== undefined) {
        projectTechStack.textContent = "Tools used: " +  project.techstack;
    }

    // Create a description element for the project item.
    const projectDesc = document.createElement("h4");
    projectDesc.classList.add("projects-desc");
    projectDesc.textContent = project.description;

    // Append the image, title, and description elements to the project item.
    projectItem.appendChild(projectImage); 
    projectItem.appendChild(projectTitle);
    projectItem.appendChild(projectTechStack);
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