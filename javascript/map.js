// Initialize and add the map
let map;

async function initMap() {
  // The location of Otago Poly
  const center = { lat: -45.86644584864054, lng: 170.51879383928727};
  const bounds = { 
    north: -45.863154,
    south: -45.871172,
    west: 170.515346,
    east: 170.528159,
  };
  // Request needed libraries.
  const { InfoWindow, Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Poly
  const map = new Map(document.getElementById("map"), {
    zoom: 19,
    tilt: 60,
    center,
    restriction: {
      latLngBounds: bounds,
      strictBounds: false,
    },
    mapId: "bf60f0d80b94a1e6",
    zoomControl: true,
    cameraControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: true,
    fullscreenControl: false,

  });

  for (const artwork of artworks) {
    const infowindow = new google.maps.InfoWindow({
      content: buildPopup(artwork),
    });
  
  for (const artPin of artPins) {
    const AdvancedMarkerElement = new google.maps.marker.AdvancedMarkerElement({
      map,
      content: buildContent(artPin),
      position: artPin.position,
      title: artPin.description,
    });

    AdvancedMarkerElement.addListener("click", () => {
      infowindow.open({
        anchor: AdvancedMarkerElement,
        map,
      });
    });
  }

}
  
}

  function buildContent(artPin) {
    const content = document.createElement("div");
  
    content.classList.add("artPin");
    content.innerHTML = `
        <div class="art-pin">
          <img src="${artPin.image}" alt="art hero">
        </div>
      `;
    return content;
  }

  const artPins = [
  {
    image: "/assets/images/route-icon-temp.png",
    description: "Ngā Kete",
    position: {
      lat: -45.86644584864054, 
      lng: 170.51879383928727
    },
  },
  {
    image: "/assets/images/route-icon-temp.png",
    description: "Ngā Kete",
    position: {
      lat:-45.86614249609565, 
      lng: 170.51854053125336
    },
  },
];

    function buildPopup(artwork) {
    const content = document.createElement("div");
  
    content.classList.add("artwork");
    content.innerHTML = `
        <div class="art-card">
              <a href="${artwork.page}">
                <button type="button" aria-label="Artwork Button" title="View artwork">
                  <img src="${artwork.image}" alt="art hero">
                  <div class="card-text">
                    <h3>${artwork.name}</h3>
                    <p>${artwork.artist}</p>
                    <small>${artwork.medium}</small>
                  </div>
                  <img src="/assets/icons/arrow-right.svg" class="arrow">
                </button>
              </a>
        </div>
      `;
    return content;
  }

  const artworks = [
  {
    name: "Ngā Kete",
    artist: "Michel Tuffery",
    medium: "Sandcast Bronze, 2018",
    image: "/assets/images/route-icon-temp.png",
    page: "/pages/artwork-pages/nga-kete.html",
    position: {
      lat: -45.86644584864054, 
      lng: 170.51879383928727
    },
  },

];

initMap();