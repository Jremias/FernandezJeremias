const input = document.getElementById("busqueda");
const boton = document.getElementById("botonBuscar");
const select = document.getElementById("apiSelect");

const resultadosDiv = document.getElementById("resultados");
const statsDiv = document.getElementById("stats");
const favoritosDiv = document.getElementById("favoritos");

let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

renderFavoritos();

boton.addEventListener("click", async () => {
  const nombre = input.value.trim();
  const api = select.value;

  const data = await obtenerPersonajes(nombre, api);
  renderPersonajes(data);
  renderStats(data);
});

async function obtenerPersonajes(nombre, api) {
  try {

    const urlRick = nombre
      ? `https://rickandmortyapi.com/api/character/?name=${nombre}`
      : `https://rickandmortyapi.com/api/character`;

    const urlSimpsons = nombre
      ? `https://api.sampleapis.com/simpsons/characters?name=${nombre}`
      : `https://api.sampleapis.com/simpsons/characters`;

    let personajes = [];

    if (api === "rickAndMorty" || api === "ambas") {
      const resp = await fetch(urlRick);
      if (!resp.ok) throw new Error(`Error: ${resp.status}`);
        const data = await resp.json();
        personajes.push(...data.results.map(p => ({
          id: p.id,
          nombre: p.name,
          imagen: p.image,
          estado: p.status,
          genero: p.gender,
          detalle: p.species,
          origen: "rickAndMorty"
        })));
      
    }

    if (api === "theSimpsons" || api === "ambas") {
      const resp = await fetch(urlSimpsons);
      if (!resp.ok) throw new Error(`Error: ${resp.status}`);
          
        const data = await resp.json();
        personajes.push(...data.map(p => ({
          id: p.id,
          nombre: p.name,
          imagen: p.image,
          estado: p.status,
          genero: p.gender,
          detalle: p.occupation,
          origen: "theSimpsons"
        })));
      
    }

    return personajes;

  } catch (error) {
    resultadosDiv.innerHTML = `<p>Error: ${Error.message}</p>`;
    return [];
  }
}

function renderPersonajes(data) {
  resultadosDiv.innerHTML = "";

  if (data.length === 0) {
    resultadosDiv.innerHTML = "<p>No hay resultados</p>";
    return;
  }

  data.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("card", p.origen);

    const esFav = favoritos.some(f => f.id === p.id && f.origen === p.origen);
    if (esFav) div.classList.add("fav");

    div.innerHTML = `
      <img src="${p.imagen}">
      <h3>${p.nombre}</h3>
      <p>${p.estado}</p>
      <p>${p.genero}</p>
      <p>${p.detalle}</p>
      <p>${p.origen}</p>
      <button>⭐</button>
    `;

    div.querySelector("button").addEventListener("click", () => {
      toggleFavorito(p);
    });

    resultadosDiv.appendChild(div);
  });
}

function marcarFavorito(personaje) {
  const existe = favoritos.some(f => f.id === personaje.id && f.origen === personaje.origen);

  if (existe) {
    favoritos = favoritos.filter(f => !(f.id === personaje.id && f.origen === personaje.origen));
  } else {
    favoritos.push(personaje);
  }

  localStorage.setItem("favoritos", JSON.stringify(favoritos));

  renderFavoritos();
}

function renderFavoritos() {
  favoritosDiv.innerHTML = "<h3>Favoritos</h3>";

  favoritos.forEach(p => {
    favoritosDiv.innerHTML += `
      <p>${p.nombre} (${p.origen})</p>
    `;
  });
}

function renderStats(data) {
  const total = data.length;

  const porGenero = data.reduce((acc, p) => {
    acc[p.genero] = (acc[p.genero] || 0) + 1;
    return acc;
  }, {});

  const porEstado = data.reduce((acc, p) => {
    acc[p.estado] = (acc[p.estado] || 0) + 1;
    return acc;
  }, {});

  const porOrigen = data.reduce((acc, p) => {
    acc[p.origen] = (acc[p.origen] || 0) + 1;
    return acc;
  }, {});

  statsDiv.innerHTML = `
    <h3>Estadísticas</h3>
    <p>Total: ${total}</p>
    <pre>${JSON.stringify(porGenero, null, 2)}</pre>
    <pre>${JSON.stringify(porEstado, null, 2)}</pre>
    <pre>${JSON.stringify(porOrigen, null, 2)}</pre>
  `;
}
