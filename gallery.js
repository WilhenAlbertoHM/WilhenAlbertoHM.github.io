// Get all pictures.
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

// Deal with the slides (prev and next arrows)
let currIndex = 0;
function showSlide(index) {
    currIndex = index;
    const translateValue = -index * 100 + "%";
    galleryGrid.style.transform = "translateX(" + translateValue + ")";
}

function prevSlide() {
    if (currIndex > 0) {
        showSlide(currIndex - 1);
    }
}

function nextSlide() {
    const maxIndex = pictures.length - 3;
    if (currIndex < maxIndex) {
        showSlide(currIndex + 1);
    }
}