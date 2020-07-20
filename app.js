$.getJSON(
  "https://api.openweathermap.org/data/2.5/weather?q=Orlando&units=imperial&APPID=1de4249a64d3d7fcdf4025286bd58719",
  function (data) {
    console.log(data);

    var icon =
      "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp = Math.floor(data.main.temp) + " " + ".F";
    var weatherName = data.weather[0].main;
    var humadity = data.main.humidity + "%";
    var feelLike = Math.floor(data.main.feels_like) + " " + ".F";

    $(".icon").attr("src", icon);
    $(".temp").append(temp);
    $(".weather").append(weatherName);
    $(".humidity").append(humadity);
    $(".feelslike").append(feelLike);
  }
);
let tl = anime.timeline({
  easing: "easeOutExpo",
  duration: "750",
});

tl.add(
  {
    targets: ".logo",
    top: "4%",
    opacity: 1,
    delay: anime.stagger(100),
  },
  "-= 600"
);
tl.add(
  {
    targets: ".Main-title",
    opacity: 1,
    duration: 1000,
  },
  "+= 600"
);
tl.add({
  targets: ".card",
  opacity: 1,
  duration: 800,
});

tl.add({
  targets: "ul",
  opacity: 1,
  duration: 800,
});
