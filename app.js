//make BMI Calculator

$(document).ready(function() {
  // window.setTimeout(function, milliseconds);

  $("#btn").click(function() {
    var city_name = $("#cityname").val();
    getValue(city_name);
  });

  function getValue(city) {
    // alert(city);
    $.ajax({
      // url: 'https://api.apixu.com/v1/current.json?key=fd48aae7884d4ddcbf192605171202&q='+city,
      url:
        "http://api.weatherstack.com/current?access_key=7e1eb2ef986573ee989140cac83dceb3&query=" +
        city,
      dataType: "json",
      success: function(data) {
        // console.log(data);

        $("#city").text(data.location.name);
        $("#country").text(data.location.country);
        $("#temp").text(data.current.temperature);
        var test = data.current.temperature;
        console.log(test);

        $("#temp").change(function(){
		  if (test < 20) {
	          alert("not so cold or not warm");
	        }
		});
        
        
      }
    });
  }
});
