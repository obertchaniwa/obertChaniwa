
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

                $('#txtNorth').html(result['data'][0]['north']);
                $('txtSouth').html(result['data'][0]['south']);
                $('#txtEast').html(result['data'][0]['east']);
                $('#txtWest').html(result['data'][0]['west']);
            }
                console.log(data)
                $('#quakes').html(data);
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // your error code
        }
    }); 

});

$('#btnRun2').click(function() {

    $.ajax({
        url: "libs/php/oceans.php",
        type: 'POST',
        dataType: 'json',
        data: {
            lat: $('#lat').val(),
            lng: $('#lng').val(),
        },
        
        success: function(result) {

            console.log(JSON.stringify(result));

            if (result.status.name == "ok") {

                $('#txtLat').html(result['data'][0]['lat']);
                $('#txtLng').html(result['data'][0]['lng']);
            }
        
            $('#oceans').html(data);	
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
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

                $('#txtNorth1').html(result['data'][0]['north1']);
                $('txtSouth1').html(result['data'][0]['south1']);
                $('#txtEast1').html(result['data'][0]['east1']);
                $('#txtWest1').html(result['data'][0]['west1']);
            }
        
            $('#weather').html(data);	
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
        }
    }); 
        
});
