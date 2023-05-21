
$('#btnRun1').click(function() {
	
    $.ajax({
        url: "libs/php/earthquakes.php",
        type: 'POST',
        dataType: 'json',
        data: {
            north: $('#north').val(),
            south: $('#south').val(),
            east: $('#east').val(),
            west: $('#west').val(),
        },
        
        success: function(result) {

            console.log(JSON.stringify(result));

            if (result.status.name == "ok") {

                $('#quakes').html(result.data[0].magnitude);
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // your error code
            console.log(jqXHR);
        }
    }); 

});

$('#btnRun2').click(function() {

    $.ajax({
        url: "libs/php/ocean.php",
        type: 'POST',
        dataType: 'json',
        data: {
            lat: $('#lat').val(),
            lng: $('#lng').val(),
        },
        
        success: function(result) {

            console.log(JSON.stringify(result));

            if (result.status.name == "ok") {
                var oceanData = result.data;
                
                // Access the properties of the oceanData object and display them using DOM elements
                var oceanName = oceanData.name;
                var oceanArea = oceanData.area;
                var oceanDepth = oceanData.depth;

                $('#oceanName').text(oceanName);
                $('#oceanArea').text(oceanArea);
                $('#oceanDepth').text(oceanDepth);
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // Handle error
            console.log(jqXHR);
        }
    }); 
});


$('#btnRun3').click(function() {

    $.ajax({
        url: "libs/php/weather.php",
        type: 'POST',
        dataType: 'json',
        data: {
            north: $('#north1').val(),
            south: $('#south1').val(),
            east: $('#east1').val(),
            west: $('#west1').val(),
        },
        success: function(result) {

            console.log(JSON.stringify(result));

            if (result.status.name == "ok") {
                var weatherData = result.data;
                
                // Access the properties of the weatherData object and display them using DOM elements
                var magnitude = weatherData[0].magnitude;
                var temperature = weatherData[0].temperature;
                var humidity = weatherData[0].humidity;
                var windSpeed = weatherData[0].windSpeed;

                $('#magnitude').text(magnitude);
                $('#temperature').text(temperature);
                $('#humidity').text(humidity);
                $('#windSpeed').text(windSpeed);
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            //your error code
            console.log(jqXHR);
        }
    }); 
        
});


