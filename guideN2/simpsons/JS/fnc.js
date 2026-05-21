const url = "https://thesimpsonsapi.com/api/characters";


// ejercicio1
function ejercicio1() {
  fetch(url)
    .then(r => r.json())
    .then(data => {
      const personajes = data.results || data;
      document.getElementById("resultado").innerHTML =
        personajes[0]?.name || "Sin datos";
    });
}
ejercicio1();


// ejercicio2
function ejercicio2() {
  fetch(url)
    .then(r => r.json())
    .then(data => {
      const personajes = data.results || data;
      const cont = document.getElementById("resultado2");

      personajes.slice(0,5).forEach(p => {
        cont.innerHTML += `<p>${p.name}</p>`;
      });
    });
}
ejercicio2();


// ejercicio3
function ejercicio3() {
  fetch(url)
    .then(r => r.json())
    .then(data => {
      const personajes = data.results || data;

      const mujeres = personajes.filter(p => p.gender === "Female");

      document.getElementById("cantidadMujeres").innerHTML =
        `Se encontraron ${mujeres.length} personajes femeninos`;

      const cont = document.getElementById("resultado3");

      mujeres.forEach(p => {
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
      const personajes = data.results || data;
      const cont = document.getElementById("resultado4");

      personajes.forEach(p => {
        cont.innerHTML += `<p>${p.name} — ${p.occupation}</p>`;
      });
    });
}
ejercicio4();


// ejercicio5
function ejercicio5() {
  fetch(url)
    .then(r => r.json())
    .then(data => {
      const personajes = data.results || data;

      const viejo = personajes.reduce((acc, p) =>
        p.age > acc.age ? p : acc
      );

      document.getElementById("resultado5").innerHTML =
        `El personaje más viejo es ${viejo.name} con ${viejo.age} años`;
    });
}
ejercicio5();


// ejercicio6
function buscarPersonaje() {
  fetch(url)
    .then(r => r.json())
    .then(data => {
      const personajes = data.results || data;

      const texto = document
        .getElementById("inputBusqueda")
        .value
        .toLowerCase();

      const encontrado = personajes.find(p =>
        p.name.toLowerCase().includes(texto)
      );

      document.getElementById("resultado6").innerHTML =
        encontrado
          ? `${encontrado.name} — ${encontrado.occupation} — ${encontrado.age}`
          : "Personaje no encontrado";
    });
}


// ejercicio7
function buscarOcupacion() {
  fetch(url)
    .then(r => r.json())
    .then(data => {
      const personajes = data.results || data;

      const texto = document
        .getElementById("inputOcupacion")
        .value
        .toLowerCase();

      const existe = personajes.some(p =>
        p.occupation.toLowerCase().includes(texto)
      );

      document.getElementById("resultado7").innerHTML =
        existe
          ? "✅ Sí, existe un personaje con esa ocupación"
          : "❌ No se encontró ninguno";
    });
}


// ejercicio8
function ejercicio8() {
  fetch(url)
    .then(r => r.json())
    .then(data => {
      const personajes = data.results || data;
      const cont = document.getElementById("resultado8");

      [...personajes]
        .sort((a,b) => a.age - b.age)
        .slice(0,5)
        .forEach(p => {
          cont.innerHTML += `<p>${p.name} — ${p.age}</p>`;
        });
    });
}
ejercicio8();


// ejercicio9
function ejercicio9() {
  fetch(url)
    .then(r => r.json())
    .then(data => {
      const personajes = data.results || data;
      const cont = document.getElementById("resultado9");

      personajes.slice(0,8).forEach(p => {
        cont.innerHTML += `
          <div style="border:1px solid gray; padding:10px; margin:5px; display:inline-block;">
            <img src="${p.portrait_path}" width="100">
            <p>${p.name}</p>
            <p>${p.occupation}</p>
            <p>${p.age}</p>
          </div>
        `;
      });
    });
}
ejercicio9();


// ejercicio10
function ejercicio10() {
  fetch(url)
    .then(r => r.json())
    .then(data => {
      const personajes = data.results || data;

      const conteo = personajes.reduce((acc, p) => {
        acc[p.gender] = (acc[p.gender] || 0) + 1;
        return acc;
      }, {});

      document.getElementById("resultado10").innerHTML = `
         Masculino: ${conteo.Male || 0}<br>
         Femenino: ${conteo.Female || 0}
      `;
    });
}
ejercicio10();