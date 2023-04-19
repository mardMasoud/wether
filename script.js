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

const icons = {
  barani: "fas fa-cloud-showers-heavy",
  barfi: "far fa-snowflake",
  aftabi: "fas fa-sun",
  wind: "fas fa-wind",
};

const indexPics = Math.floor(Math.random() * 9) + 1;
let $ = document;

(function () {
  $.body.style.backgroundImage = "url(" + backgroundPics[indexPics] + ")";
  $.body.style.backgroundRepeat = "no-repeat";
  $.body.style.backgroundSize = "cover";
})();

const citiesData = [
  {
    city: "tehran",
    temp: 24,
    des: "windy",
    rutubat: 45,
    windSpeed: 97,
    icon: "fas fa-cloud-showers-heavy",
  },
  {
    city: "mashhad",
    temp: -9,
    des: "barfi",
    rutubat: 4,
    windSpeed: 48,
    icon: "far fa-snowflake",
  },
  {
    city: "sari",
    temp: 3,
    des: "barani",
    rutubat: 93,
    windSpeed: 15,
    icon: "fas fa-sun",
  },
  {
    city: "tabriz",
    temp: 14,
    des: "aftabi",
    rutubat: 7,
    windSpeed: 6,
    icon: "fas fa-wind",
  },
];
let titleInfo = $.querySelector(".title-info");
let mainContainer = $.querySelector(".container");
let loadingWedether = $.querySelector(".loading-wedether");
let cityName = $.querySelector(".title-info-city");
let searchboxElm = $.getElementById("searchBox");
let tempInfo = $.querySelector(".temp-info");
let containerInfo = $.querySelector(".container-info");
const searchIcon = $.querySelector(".material-icons")
const tempValue = $.querySelector(".temp-info-value");
const desInfoStatus = $.querySelector(".des-info-status");
const rutubatValue = $.querySelector(".rutubat-info-value");
const ico = $.querySelector(".ico");
const windyValue = $.querySelector(".windy-info-value");
let indexCities;
cityName.textContent = "";
searchIcon.addEventListener("click", function () {
  $.body.style.backgroundImage = "url(" + "/pic/12.jpg" + ")";
  loadingWedether.textContent = "Weather in ";
let searchValue=searchboxElm.value;
let cityFind=citiesData.find(function(city){
return(city.city===searchValue)
})
if(cityFind){
cityName.textContent=cityFind.city
containerInfo.classList.add('show')
tempValue.textContent=cityFind.temp
ico.setAttribute('class',cityFind.icon)
desInfoStatus.textContent=cityFind.des
rutubatValue.textContent=cityFind.rutubat
windyValue.textContent=cityFind.windSpeed
}
else{
  cityName.textContent = "";
  loadingWedether.textContent='City Not Found!'
}
});
