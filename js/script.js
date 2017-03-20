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
      // var weatherIcon = data.weather[0].main;
      // console.log(weatherIcon);
      $(".location").html(city);
      $(".temperature").html(tempF);

    });
  });

  function convertToCelcius(fahrenheit){
      var c = (5/9)*(fahrenheit-32);
      return c;
  }
  function convertToFahrenheit(celcius){
      var f = (9/5 * celcius) + 32;
      return f;
  }

  $("#convert").on("click",function(){
    var theText = $("#convert").text();
    var theTemp = $(".temperature").text();
    //console.log(theTemp);
    if(theText === 'F'){
      $("#convert").text("C");
      var newTemp = convertToCelcius(theTemp).toFixed(2);
      $(".temperature").html(newTemp);
    } else {
      $("#convert").text("F");
      var newTemp = convertToFahrenheit(theTemp).toFixed(2);
      $(".temperature").html(newTemp);
    }
  })

});
