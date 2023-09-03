
let map;

async function initMap() {

  // The location of Uluru

  const position = { lat: 56.946285, lng: 24.105078 };

  // Request needed libraries.

  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru

  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "Riga",
  });

  // The marker, positioned at Uluru

  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Riga",
  });
}

initMap();