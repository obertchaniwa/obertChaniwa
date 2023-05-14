//countryInfo:
$('#btn1').click(function() {

    $.ajax({
        url: "libs/php/countryInfo.php",
        type: 'POST',
        dataType: 'json',
        data: {
            country: $('#selCountry').val(),
            lang: $('#selLanguage').val()
        },
        success: function(result) {

            console.log(JSON.stringify(result));

            if (result.status.name == "ok") {

                $('#txtContinent').html(result['data'][0]['continent']);
                $('#txtCapital').html(result['data'][0]['capital']);
                $('#txtLanguages').html(result['data'][0]['languages']);
                $('#txtPopulation').html(result['data'][0]['population']);
                $('#txtArea').html(result['data'][0]['areaInSqKm']);
            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
        }
    }); 

});


//oceans
$('#btn2').click(function() {

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

                $('#txtName').html(result['data'][0]['name']);
                $('#txtDistance').html(result['data'][0]['distance']);
            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
        }
    }); 

});



//neighbours
$('#btn3').click(function() {

    $.ajax({
        url: "libs/php/neighbours.php",
        type: 'POST',
        dataType: 'json',
        data: {
            endpoint: "neighbours",
            country: $("#country").val(),

        },
        success: function(result) {

            console.log(JSON.stringify(result));

            if (result.status.name == "ok") {

                $('#txtCountry').html(result['data'][0]['country'])
            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
        }
    }); 

});
