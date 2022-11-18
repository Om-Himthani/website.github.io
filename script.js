document.querySelector(".button").addEventListener("click", () => {
   var sidebar = document.querySelector(".link")
   sidebar.classList.toggle("hato");
   var close = document.querySelector(".close")
   var open = document.querySelector(".open")

   if (sidebar.classList.contains("hato")) {
      open.style.display = "block";
      close.style.display = "none";
   }
   else {
      open.style.display = "none";
      close.style.display = "block";
   }

})
var video = document.querySelector(".video")
var home = document.querySelector(".firstpage")
var services = document.querySelector(".services")
var aboutus = document.querySelector(".aboutus")
var contactus = document.querySelector(".maincontentcontact")

// setTimeout(() => {
//    video.style.display = "none";
//    home.style.display = "inline-block";
//    services.style.display = "inline-block";
//    aboutus.style.display = "flex";
//    contactus.style.display = "inline-block";
// }, 6100)



