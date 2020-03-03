var imagePlace;
var statusBec = 1;

function Aprins() {
  imagePlace = document.getElementById("Light-Bulb");

  if (statusBec == 1) {
    imagePlace.src = "images/bulb-on.png";
    imagePlace.alt = "Becul este aprins";
    imagePlace.title = "Becul este aprins";
    statusBec = 0;
  } else if (statusBec == 0) {
    imagePlace.src = "images/bulb-off.png";
    imagePlace.alt = "Becul este stins";
    imagePlace.title = "Becul este stins";
    statusBec = 1; // statusBec++;
  } else {
    alert("status nedefinit pentru statusBec = " + statusBec);
  }
}
