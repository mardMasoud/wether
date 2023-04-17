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

const citiesData = {
  tehran: { temp: 24, des: "windy", rutubat: 45, windSpeed: 97 },
  tabriz: { temp: -9, des: "barfi", rutubat: 4, windSpeed: 48 },
  mashhad: { temp: 3, des: "barani", rutubat: 93, windSpeed: 15 },
  sari: { temp: 14, des: "aftabi", rutubat: 7, windSpeed: 6 },
};

let cities = ["tehran", "mashhad", "tabriz", "sari"];

let titleInfo = $.querySelector(".title-info");
let mainContainer = $.querySelector(".container");
let loadingWedether = $.querySelector(".loading-wedether");
let cityName = $.querySelector(".title-info-city");
let searchboxElm = $.getElementById("searchBox");
let tempInfo = $.querySelector(".temp-info");
let containerInfo = $.querySelector(".container-info");
const searchIcon = $.querySelector(".material-icons");
const desInfo = $.querySelector(".des-info");
const rutubatInfo = $.querySelector(".rutubat-info");
const windyInfo = $.querySelector(".windy-info");
const tempValue = $.querySelector(".temp-info-value");
const desInfoStatus = $.querySelector(".des-info-status");
const rutubatValue = $.querySelector(".rutubat-info-value");
const ico = $.querySelector(".ico");
const windyValue = $.querySelector(".windy-info-value");
let indexCities;
cityName.textContent = "";

tempInfo.remove();
desInfo.remove();
rutubatInfo.remove();
windyInfo.remove();
searchIcon.addEventListener("click", function () {
  $.body.style.backgroundImage = "url(" + "/pic/12.jpg" + ")";
  loadingWedether.textContent = "Weather in ";

  let indexCities = cities.some(function (city) {
    return searchboxElm.value === city;
  });
  if (indexCities) {
    console.log("ok");
    cityName.textContent = searchboxElm.value;
    containerInfo.append(tempInfo);

    tempValue.textContent = citiesData[searchboxElm.value].temp;

    containerInfo.append(desInfo);
    desInfoStatus.textContent = citiesData[searchboxElm.value].des;
    ico.setAttribute("class", icons[citiesData[searchboxElm.value].des]);
    containerInfo.append(rutubatInfo);
    rutubatValue.textContent = citiesData[searchboxElm.value].rutubat;
    containerInfo.append(windyInfo);
    windyValue.textContent = citiesData[searchboxElm.value].windSpeed;
  } else {
    loadingWedether.textContent = "City Not Found!";
    cityName.textContent = "";

    tempInfo.remove();
    desInfo.remove();
    rutubatInfo.remove();
    windyInfo.remove();
  }
});
