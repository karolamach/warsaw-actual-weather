$(document).ready(function() {
    let ul = $("#weather");
    let body = $("body");
    let temp = $(".temp");
    let icon = $(".icon");

    
    let weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=Warszawa&APPID=e066f50227d64e3af0e4296523d85c5a";

    function instertWeather(object) {
         
          let p = $('<p>').text("Refresh to update.");
          body.append(p);

          let li1 = $('<li>');
          let span1 = $('<span>').text("Sky : "  +object.weather[0].description );
          li1.append(span1);
          ul.append(li1);

          let li2 = $('<li>');
          let span2 = $('<span>').text("Wind speed: "+object.wind.speed+" meter/sec");
          li2.append(span2);
          ul.append(li2);

          let li3 = $('<li>');
          let span3 = $('<span>').text("Cloudiness: "+object.clouds.all+" %");
          li3.append(span3);
          ul.append(li3);

          let li4 = $('<li>');
          let span4 = $('<span>').text("Atmospheric pressure: "+Math.floor(object.main.pressure)+" hPa");
          li4.append(span4);
          ul.append(li4);

          let li5 = $('<li>');
          let span5 = $('<span>').text("Humidity: "+object.main.humidity+" %");
          li5.append(span5);
          ul.append(li5);

          let img = $('<img>');
          img.attr("src","http://openweathermap.org/img/w/" + object.weather[0].icon + ".png");
          icon.append(img);

          let temp_info = $('<p>').text("Temperature: "+Math.floor(object.main.temp - 273.15));
          temp.prepend(temp_info);
        };


    function loadWeather() {
          $.ajax({
            url: weatherUrl,

            method: 'GET'
          }).done(function(response){
            console.log(response);
            instertWeather(response);
         }).fail(function(error) {
             console.log(error);
         })
    }
    loadWeather()
});