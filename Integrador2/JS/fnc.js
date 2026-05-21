
let vecesBuscado= 0;
let personajeMasculino= 0;
let personajeFemenino= 0;
let personajeVivo=0;
let personajeMuerto= 0;
let personajeDesconocido= 0;
let simpsonExito= "No";
let rickExito= "No";
let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
let personajeActual = null;

const botonBuscar = document.getElementById("buttonBuscar"); 

const darFavorito = document.getElementById("darFavorito");


const subirError = document.getElementById("mostrarError");

const divPersonajeTarjeta = document.getElementById("tarjetaDePersonaje");

const divEstadisticas = document.getElementById("estadisticas");

const divFavoritos = document.getElementById("favoritos");

function renderFavoritos() {
  divFavoritos.innerHTML = favoritos
    .map(nombre => `<p>${nombre}</p>`)
    .join("");
}

renderFavoritos();
darFavorito.addEventListener("click", () => {
  if (!personajeActual) return;

  if (!favoritos.includes(personajeActual.name)) {
    favoritos.push(personajeActual.name);

    localStorage.setItem("favoritos", JSON.stringify(favoritos));

    renderFavoritos();
  }
});




botonBuscar.addEventListener('click', function (){

const apiElegida = document.getElementById("selectAPIs").value;
console.log(apiElegida);
const nombreBuscado = document.getElementById("inputBuscar").value;




if (apiElegida == "theSimpsons" || apiElegida === "ambas")
    {
        console.log("ss control 1");
        async function simpson (nombreBuscado) 
        {
console.log("ss control 2");
            try 
            {
                console.log("ss control 3");
                const resp = await fetch("https://thesimpsonsapi.com/api/characters");
                if (!resp.ok) throw new Error(`Error: ${resp.status}`);
                const data = await resp.json();
                console.log(data);
                const personaje= data.results.find(nombre => nombre.name.toLowerCase().includes(nombreBuscado.toLowerCase())); 
                console.log(personaje);
                personajeActual= personaje;
                const randomIndex = Math.floor(Math.random() * personaje.phrases.length);
                divPersonajeTarjeta.innerHTML = `
                    <img src="https://thesimpsonsapi.com/api/characters" += ${personaje.portrait_path}> 
                    <p> Nombre: ${personaje.name} </p> 
                    <p> Ocupación: ${personaje.occupation} </p>
                    <p> Frase: ${personaje.phrases[randomIndex]} </p>
                    <p> Estado: ${personaje.status} </p>
                    <p> Genero: ${personaje.gender} </p>
                    <p> Edad: ${personaje.age} </p>
                    <p> Fecha de nacimiento: ${personaje.birthdate} </p>
                    <p> Universo: Los Simpson</p>
                    ` 
                    vecesBuscado= vecesBuscado + 1;
                    if (personaje.gender == "Male") {
                        personajeMasculino= personajeMasculino + 1;
                    }
                    if (personaje.gender == "Female"){
                        personajeFemenino = personajeFemenino+ 1;
                    }
                    if (personaje.status == "Unknown") {
                        personajeDesconocido= personajeDesconocido + 1;
                    }
                    if (personaje.status == "Alive") {
                        personajeVivo= personajeVivo + 1;
                    }
                    if (personaje.status == "Dead") {
                        personajeMuerto= personajeMuerto + 1;
                    }
                    
                    divEstadisticas.innerHTML = `
                    <p> Personajes masculinos hasta el momento: ${personajeMasculino} </p>
                    <p> Personajes femeninos hasta el momento: ${personajeFemenino} </p>
                    <p> Personajes con estatus vivo hasta el momento: ${personajeVivo} </p>
                    <p> Personajes con estatus muerto hasta el momento: ${personajeMuerto} </p>
                    <p> Personajes con estatus desconocido hasta el momento: ${personajeDesconocido} </p>
                    <p> Veces buscado: ${vecesBuscado} </p>`
                    simpsonsExito= "Sí";

                

        } catch (error) {
                            if (rickExito == "Sí") {
                    rickExito = "No"
                }
                else 
                {
                    alert ("Algo ocurrió con la API:", Error.message);
                
                }
                //homero simpson personaje.portrait_path no está disponible 
            }
        }
        simpson(nombreBuscado);
            
}

if (apiElegida === "rickAndMorty" || apiElegida === "ambas")
{
    async function rick (nombreBuscado) 
    {
     console.log("rick control 1")
        try 
        {
            console.log("rick control 2")
            const resp = await fetch("https://rickandmortyapi.com/api/character");
            if (!resp.ok) throw new Error(`Error: ${resp.status}`);
            const data = await resp.json();
            console.log(data);
            const personaje= data.results.find(nombre => nombre.name.toLowerCase().includes(nombreBuscado.toLowerCase())); 
            console.log(personaje);
            personajeActual= personaje;
            divPersonajeTarjeta.innerHTML = `
                <img src="${personaje.image}">
                <p> Nombre: ${personaje.name} </p> 
                <p> Status: ${personaje.status} </p>
                <p> Especie: ${personaje.species} </p>
                <p> Genero: ${personaje.gender} </p>
                <p> Origen: ${personaje.origin.name} </p>
                <p> Locación: ${personaje.location.name} </p>
                <p> Universo: Rick y Morty</p>
                `
                if (personaje.gender == "Male") {
                    personajeMasculino= personajeMasculino + 1;
                }
                if (personaje.gender == "Female") {
                    personajeFemenino= personajeFemenino + 1;
                }
                if (personaje.status == "Unknown") {
                    personajeDesconocido= personajeDesconocido + 1;
                }
                if (personaje.status == "Alive") {
                    personajeVivo= personajeVivo + 1;
                }
                if (personaje.status == "Dead") {
                    personajeMuerto= personajeMuerto + 1;
                }
                vecesBuscado = vecesBuscado + 1;

                divEstadisticas.innerHTML = `
                <p> Personajes masculinos hasta el momento: ${personajeMasculino} </p>
                <p> Personajes femeninos hasta el momento: ${personajeFemenino} </p>
                <p> Personajes con estatus vivo hasta el momento: ${personajeVivo} </p>
                <p> Personajes con estatus muerto hasta el momento: ${personajeMuerto} </p>
                <p> Personajes con estatus desconocido hasta el momento: ${personajeDesconocido} </p>
                <p> Veces buscado: ${vecesBuscado} </p>
                `
                rickExito= "Sí"
               
        } catch (error) {
            if (simpsonExito == "Sí") {
                simpsonExito = "No";
            }
            else
            {
                   
                alert ("Algo ocurrió con la API:", Error.message);
            }
        }
    }
    rick(nombreBuscado);

    }
}   
)
