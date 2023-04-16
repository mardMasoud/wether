const backgroundPics = [
  "/pic/1.jpg",
  "/pic/2.jpg",
  "/pic/3.jpg",
  "/pic/4.jpg",
  "/pic/5.jpg",
  "/pic/6.jpg",
  "/pic/7.jpg",
  "/pic/8.jpg",
  "/pic/9.jpg",
  "/pic/10.jpg",
];
const indexPics = Math.floor(Math.random() * 9) + 1;
let $ = document;

(function () {
  $.body.style.backgroundImage = "url(" + backgroundPics[indexPics] + ")";
  $.body.style.backgroundRepeat = "no-repeat";
  $.body.style.backgroundSize = "cover";
})();

const citiesData = {
  tehran: { temp: 24, des: "aftabi", rutubat: 45, windSpeed: 97 },
  tabriz: { temp: -9, des: "barfi", rutubat: 4, windSpeed: 48 },
  mashhad: { temp: 3, des: "barani", rutubat: 93, windSpeed: 15 },
  sari: { temp: 14, des: "aftabi", rutubat: 7, windSpeed: 6 },
};
let mainContainer=$.querySelector('.container')
const searchIcon=$.addEventListener('click',function(){
// mainContainer.style.height='600px'
})