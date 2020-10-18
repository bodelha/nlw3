const map = L.map('mapid').setView([-27.218506,-49.642948], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon ({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,78],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})

function addMarker({id, name, lat, lng}) {
    const popup = L.popup({
        closeButton: false,
        className: "map-popup",
        minWidht: 240,
        minHeight: 240
    }).setContent(`${name} <a href="/orphanage?id=${id}"><img src="/images/arrow-white.svg"></a>`)
    
    L
    .marker([lat,lng], {icon})
    .addTo(map)
    .bindPopup(popup)
}

const orphanagesSpan = document.querySelectorAll ("#orphanages-data span")
orphanagesSpan.forEach ( orphanageElement => {
    const orphanage = {
        id: orphanageElement.dataset.id,
        name: orphanageElement.dataset.name,
        lat: orphanageElement.dataset.lat,
        lng: orphanageElement.dataset.lng
    }
    addMarker (orphanage)
})