
$(document).ready(function(){
  $("#create_animal").on("click", function() {
    var name = $("#animal_name").val();
    var latin_name = $("#animal_latin_name").val();
    var kingdom = $("#animal_kingdom").val();
    newAnimal = {
      "animal": {
        "name": name,
        "latin_name": latin_name,
        "kingdom": kingdom,
      }
    }
    alert(JSON.stringify(newAnimal));
    $.ajax({
      datatype: 'json',
      url: '/animals',
      method: 'post',
      data: newAnimal,
      success: function(dataFromServer) {
        alert("Received message : " + JSON.stringify(dataFromServer));
        add_to_animal_list(dataFromServer);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        alert("Add new animal failed: " + errorThrown);
      }
    });
  });


  $("#create_sighting").on("click", function() {
    var date = $("#sighting_date").val();
    var lat = $("#sighting_lat").val();
    var long = $("#sighting_long").val();
    var region = $("#sighting_region").val();
    var animal_id = $("#animal_id").val();
    alert(date);
    newSighting = {
      "sighting": {
        "date": date,
        "lat": lat,
        "long": long,
        "region": region,
        "animal_id": animal_id
      }
    }
    alert(JSON.stringify(newSighting));
    $.ajax({
      datatype: 'json',
      url: '/sightings',
      method: 'post',
      data: newSighting,
      success: function(dataFromServer) {
        alert("Received message : " + JSON.stringify(dataFromServer));
        add_to_sightings_list(dataFromServer);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        alert("Add new sighting failed: " + errorThrown);
      }
    });
  });
});


function add_to_animal_list(animal) {
  $("tbody").prepend("<tr>" +
    "<td>"+ animal.name +"</td>" +
    "<td>"+ animal.latin_name +"</td>" +
    "<td>"+ animal.kingdom +"</td>" +
    "<td>"+ animal.name +"</td>" +
  "</tr>");
}

function add_to_sightings_list(dataFromServer) {
  $("#sighting_list").append("<li>"+ dataFromServer.date + " " + dataFromServer.region + "</li>")
}
