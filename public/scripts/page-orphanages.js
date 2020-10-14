const map = L.map('mapid').setView([-27.218506,-49.642948], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon ({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58,78],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})

const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidht: 240,
    minHeight: 240
}).setContent('Lar das Meninas <a href="orphanage.html?id=1" class="choose-orphanage"><img src="./public/images/arrow-white.svg"></a>')

L
.marker([-27.218506,-49.642948], {icon})
.addTo(map)
.bindPopup(popup);