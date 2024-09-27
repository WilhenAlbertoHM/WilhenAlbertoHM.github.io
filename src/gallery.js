// Get all pictures.
let pictures = ["/images/nightumb2.jpg", 
    "/images/quincycenter.jpg", "/images/sunset.jpg", "/images/coolsunset.jpg", "/images/jfklib.jpg", 
    "/images/montreal.jpg", "/images/sunset2.jpg", "/images/sunsetumb.jpg", "/images/towertoronto.jpg", "/images/trees.jpg", 
    "/images/uhall.jpg", "/images/umbday.jpg"];


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
