$(document).ready(function() {
    var results = $.getJSON("cities.json", function(data) {
        for(var i = 0; i < data.length; i++) {
            $("#cities").append('<option value="' + data[i].name + '">' + data[i].name + '</option');
        }
    });
});