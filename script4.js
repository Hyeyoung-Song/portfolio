let images = [
  "image/beaty.png",
  "image/hour.png",
  "image/for.png",
  "image/sweet.png",
  "image/cau.png"
];

function imageSlider(parent,images){
  let currentImage = 0;
  let slider = {
    parent:parent,
    images:parent.querySelector(".images"),
    thumbnails:parent.querySelector(".thumbnails"),
    backBtn:parent.querySelector(".back-btn"),
    nextBtn:parent.querySelector(".next-btn")
    p:parent.querySelector(".p")
  };
  
  slider.images.innerHTML = images.map(function(image){
    return `<img src="${image}"/>`
  }).join("");
  
  let imageNodes = slider.images.querySelectorAll("img");
  imageNodes[currentImage].classList.add("active");
  
  slider.thumbnails.innerHTML = slider.images.innerHTML;
  
  let thumbnailNodes = slider.thumbnails.querySelectorAll("img.p");
  thumbnailNodes[currentImage].classList.add("active");
  for(let i=0;i<thumbnailNodes.length;i++){
    thumbnailNodes[i].addEventListener("click",function(){
      slider.thumbnails.querySelector("img.active").classList.remove("active");
      thumbnailNodes[i].classList.add("active");
      imageNodes[currentImage].classList.remove("active");
      currentImage = i;
      imageNodes[currentImage].classList.add("active");
    });
  }
  
  slider.backBtn.p.addEventListener("click",function(){
    imageNodes[currentImage].classList.remove("active");
    currentImage--;
    if(currentImage < 0){
      currentImage = images.length - 1;
    }
    imageNodes[currentImage].classList.add("active");
    slider.thumbnails.querySelector("img.active").classList.remove("active");
    thumbnailNodes[currentImage].classList.add("active");
  });
  
  slider.nextBtn.addEventListener("click",function(){
    imageNodes[currentImage].classList.remove("active");
    currentImage = (currentImage+1) % images.length;
    imageNodes[currentImage].classList.add("active");
    slider.thumbnails.querySelector("img.active").classList.remove("active");
    thumbnailNodes[currentImage].classList.add("active");
  });
}

imageSlider(document.querySelector(".image-slider"),images);