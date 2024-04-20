document.addEventListener("DOMContentLoaded", function() {
    var images = ["Image1.jpg" ,"Image3.jpg","Image2.jpg", "Image7.jpg", "Image3.jpg"];
    var currentIndex = 0;
    var imgElement = document.getElementById("changingImage");
  
    function changeImage() {
      imgElement.src = images[currentIndex];
      currentIndex = (currentIndex + 1) % images.length;
    }
    setInterval(changeImage, 2000);
  });