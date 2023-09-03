
let map;

async function initMap() {



  const position = { lat: 56.946285, lng: 24.105078 };




  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");



  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "Riga",
  });



  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Riga",
  });
}

initMap();