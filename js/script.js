$(document).ready(function(){
  navigator.geolocation.getCurrentPosition(function(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var units = "&units=imperial";
    var appID = "&APPID=28b6d6ec69cc4431386c9ec1ae2b011e";
    var cb = "&callback=JSON_CALLBACK";
    var url = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+""+units+appID;
    $.getJSON(url,function(data){
      console.log(data);
      var city = data.name;
      var tempF = Math.round(data.main.temp);
      var tempC = Math.round((data.main.temp-32)*(5/9));
      var weatherIcon = data.weather[0].main;
      console.log(weatherIcon);
      $(".location").html(city);
      $(".temperature").html(tempF +"F");
      // clear clouds thunderstorm rain snow
      switch (weatherIcon) {
            case 'Clear':
              $("#sunny").removeClass('hidden');
              break;
            case 'Clouds':
              $("#sunny").removeClass('hidden');
              break;
            case 'Rain':
              $("#sunny").removeClass('hidden');
              break;
            case 'Snow':
              $("#sunny").removeClass('hidden');
              break;
            case 'Clear':
              $("#sunny").removeClass('hidden');
              break;
            case 'Thunderstorm':
              $("#sunny").removeClass('hidden');
              break;
            default:
          $('div.clouds').removeClass('hide');
          // modify default later
          }

    });
  });


});
