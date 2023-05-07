//FIRST API:
$('#btn1').click(function() {

    $.ajax({
        url: "libs/php/temp1API.php",
        type: 'POST/GET',
        dataType: 'json',
        data: {

        },
        success: function(result) {

            console.log(JSON.stringify(result));

            if (result.status.name == "ok") {

                $('#txtContent').html(result['data'][0]['content']);
                $('#txtContent').html(result['data'][0]['content']);
                $('#txtContent').html(result['data'][0]['content']);
                $('#txtContent').html(result['data'][0]['content']);
                $('#txtContent').html(result['data'][0]['content']);

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            //  code error to go here
        }
    }); 

});


//SECOND API
$('#btn2').click(function() {

    $.ajax({
        url: "libs/php/temp2API.php",
        type: 'POST/GET',
        dataType: 'json',
        data: {

        },
        success: function(result) {

            console.log(JSON.stringify(result));

            if (result.status.name == "ok") {

                $('#txtContent').html(result['data'][0]['content']);
                $('#txtContent').html(result['data'][0]['content']);
                $('#txtContent').html(result['data'][0]['content']);
                $('#txtContent').html(result['data'][0]['content']);
                $('#txtContent').html(result['data'][0]['content']);

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            //  code error to go here
        }
    }); 

});



//THIRD API
$('#btn2').click(function() {

    $.ajax({
        url: "libs/php/temp3API.php",
        type: 'POST/GET',
        dataType: 'json',
        data: {

        },
        success: function(result) {

            console.log(JSON.stringify(result));

            if (result.status.name == "ok") {

                $('#txtContent').html(result['data'][0]['content']);
                $('#txtContent').html(result['data'][0]['content']);
                $('#txtContent').html(result['data'][0]['content']);
                $('#txtContent').html(result['data'][0]['content']);
                $('#txtContent').html(result['data'][0]['content']);

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            //  code error to go here
        }
    }); 

});