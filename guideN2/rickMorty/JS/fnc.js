const url = "https://rickandmortyapi.com/api/character";


// ejercicio1
function ejercicio1() {
  fetch(url)
    .then(r => r.json())
    .then(data => {
      document.getElementById("resultado").innerHTML =
        data.results[0].name;
    });
}
ejercicio1();


// ejercicio2
function ejercicio2() {
  fetch(url)
    .then(r => r.json())
    .then(data => {
      const cont = document.getElementById("resultado2");

      data.results.slice(0,5).forEach(p => {
        cont.innerHTML += `<p>${p.name} — ${p.status}</p>`;
      });
    });
}
ejercicio2();


// ejercicio3
function ejercicio3() {
  fetch(url)
    .then(r => r.json())
    .then(data => {
      const vivos = data.results.filter(p => p.status === "Alive");

      document.getElementById("cantidadVivos").innerHTML =
        `Personajes vivos en esta página: ${vivos.length}`;

      const cont = document.getElementById("resultado3");

      vivos.forEach(p => {
        cont.innerHTML += `<p>${p.name}</p>`;
      });
    });
}
ejercicio3();


// ejercicio4
function ejercicio4() {
  fetch(url)
    .then(r => r.json())
    .then(data => {
      const humanos = data.results.filter(p => p.species === "Human");

      document.getElementById("cantidadHumanos").innerHTML =
        `Humanos encontrados: ${humanos.length}`;

      const cont = document.getElementById("resultado4");

      humanos.forEach(p => {
        cont.innerHTML += `<p>${p.name} — ${p.species}</p>`;
      });
    });
}
ejercicio4();


// ejercicio5
function buscarPorId() {
  const id = document.getElementById("inputId").value;

  fetch(`${url}/${id}`)
    .then(r => r.json())
    .then(p => {
      document.getElementById("resultado5").innerHTML = `
        <p>${p.name} — ${p.status}</p>
        <img src="${p.image}" width="150">
      `;
    })
    .catch(() => {
      document.getElementById("resultado5").innerHTML =
        "Personaje no encontrado";
    });
}


// ejercicio6
function ejercicio6() {
  fetch(url)
    .then(r => r.json())
    .then(data => {
      const cont = document.getElementById("resultado6");

      data.results
        .sort((a,b) => b.episode.length - a.episode.length)
        .forEach(p => {
          cont.innerHTML += `<p>${p.name} — ${p.episode.length} episodios</p>`;
        });
    });
}
ejercicio6();


// ejercicio7
function ejercicio7() {
  fetch(url)
    .then(r => r.json())
    .then(data => {
      const todos = data.results.every(p => p.image !== "");

      document.getElementById("resultado7").innerHTML =
        todos
          ? "✅ Todos los personajes tienen imagen"
          : "⚠️ Hay personajes sin imagen";
    });
}
ejercicio7();


// ejercicio8
function buscarPorNombre() {
  const texto = document.getElementById("inputNombre").value;

  fetch(`${url}?name=${texto}`)
    .then(r => r.json())
    .then(data => {
      const cont = document.getElementById("resultado8");
      cont.innerHTML = "";

      data.results.forEach(p => {
        cont.innerHTML += `
          <div style="border:1px solid gray; padding:10px; margin:5px; display:inline-block;">
            <img src="${p.image}" width="100">
            <p>${p.name}</p>
            <p>${p.status}</p>
          </div>
        `;
      });
    })
    .catch(() => {
      document.getElementById("resultado8").innerHTML =
        "No se encontraron resultados";
    });
}


// ejercicio9
function ejercicio9() {
  fetch(url)
    .then(r => r.json())
    .then(data => {
      const agrupados = data.results.reduce((acc, p) => {
        acc[p.species] = (acc[p.species] || 0) + 1;
        return acc;
      }, {});

      const cont = document.getElementById("resultado9");

      Object.entries(agrupados).forEach(([esp, cant]) => {
        cont.innerHTML += `<p>${esp}: ${cant}</p>`;
      });
    });
}
ejercicio9();


// ejercicio10
function ejercicio10() {
  fetch(url)
    .then(r => r.json())
    .then(data => {
      const personajes = data.results;

      const vivos = personajes.filter(p => p.status === "Alive").length;
      const muertos = personajes.filter(p => p.status === "Dead").length;
      const desconocidos = personajes.filter(p => p.status === "unknown").length;

      const ordenados = [...personajes].sort((a,b) => b.episode.length - a.episode.length);

      const max = ordenados[0];
      const min = ordenados[ordenados.length - 1];

      const especies = [...new Set(personajes.map(p => p.species))];

      document.getElementById("resultado10").innerHTML = `
        <p>Total personajes: ${personajes.length}</p>
        <p>Vivos: ${vivos}</p>
        <p>Muertos: ${muertos}</p>
        <p>Desconocidos: ${desconocidos}</p>
        <p>Más episodios: ${max.name} (${max.episode.length})</p>
        <p>Menos episodios: ${min.name} (${min.episode.length})</p>
        <p>Especies: ${especies.join(", ")}</p>
      `;
    });
}
ejercicio10();