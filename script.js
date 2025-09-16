
const allImages = document.querySelectorAll(".gallery-img");
let visibleImages = Array.from(allImages);
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
let currentIndex = 0;

// Ensure lightbox hidden on page load
window.onload = function() {
  lightbox.style.display = "none";
};

// Open Lightbox
function openGallery(index){
  currentIndex = index;
  lightbox.style.display = "flex";
  lightboxImg.src = visibleImages[currentIndex].src;
}

// Close Lightbox
function closeGallery(){
  lightbox.style.display = "none";
}

// Next / Prev Navigation
function changeImage(direction){
  currentIndex += direction;
  if(currentIndex < 0) currentIndex = visibleImages.length - 1;
  if(currentIndex >= visibleImages.length) currentIndex = 0;
  lightboxImg.src = visibleImages[currentIndex].src;
}

// Filter Images
function filterImages(category){
  visibleImages = [];
  allImages.forEach(img => {
    if(category === "all" || img.classList.contains(category)){
      img.style.display = "block";
      visibleImages.push(img);
    } else {
      img.style.display = "none";
    }
  });
}
