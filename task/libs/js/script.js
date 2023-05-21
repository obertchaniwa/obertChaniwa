
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
                $('#oceanData').html(JSON.stringify(result.data)); 
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

                $('#weatherData').html(result.data[0].magnitude);
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            //your error code
            console.log(jqXHR);
        }
    }); 
        
});
