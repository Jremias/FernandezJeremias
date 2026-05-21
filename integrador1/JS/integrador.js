const map = L.map('map').setView([0,0],2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution:'&copy; OpenStreetMap'
}).addTo(map);

let marcador
const boton= document.getElementById('botonBuscar');

boton.addEventListener('click', buscarEnMapa);

async function buscarEnMapa () {
    const resp= await fetch('https://randomuser.me/api/');
    const data= await resp.json();
    console.log(data);
    const usuario= data.results[0];

    const lat= parseFloat(usuario.location.coordinates.latitude);
    const lon= parseFloat(usuario.location.coordinates.longitude);

    if(marcador){
        map.removeLayer(marcador);
    }
map.setView([lat,lon],13);

marcador= L.marker([lat,lon]).addTo(map);

document.getElementById('info').innerHTML=`
<h2> ${usuario.name.first} ${usuario.name.last}</h2>
<p>Email: ${usuario.email }</p>
<p>País: ${usuario.location.country} </p>
`;
console.log(lon,lat);
}
