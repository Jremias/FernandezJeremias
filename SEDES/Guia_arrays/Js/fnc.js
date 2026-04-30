//Bloque 1//
const botonBloqueUno= document.getElementById("botonBloqueUno");
    if (botonBloqueUno)
    {
        botonBloqueUno.addEventListener("click",function()
        {
            //Ejercicio 1//
            const colores = ["Rojo", "Verde"];
            console.log (colores);
            colores.push("Azul", "Amarillo");
            console.log(colores);
            //////////////////////////////////////////////////////////////////////
            //Ejercicio 2//
            const dias= ["Lunes", "Martes", "miercoles"];
            console.log(dias);
            dias.pop();
            console.log(dias);
            //////////////////////////////////////////////////////////////////////////
            //Ejercicio 3//
            const frutas= ["Manzana", "Pera"];
            console.log(frutas);
            frutas.unshift("banana");
            console.log(frutas);
            ////////////////////////////////////////////////////////////////////////
            //Ejercicio 4//
            const numeros= [10,20,30,40];
            console.log(numeros);
            numeros.shift();
            console.log(numeros);
            ////////////////////////////////////////////////////////////////////////
            //Ejercicio 5//
            nombres= ["Juan", "Ana", "Pedro", "Marta", "Luis"];
            console.log(nombres);
            const nombresNuevo= nombres.splice(1,1);
            console.log(nombres);
            /////////////////////////////////////////////////////////////////////
            //Ejercicio 6//
            meses= ["Enero", "Marzo", "Abril"];
            console.log(meses);
            const mesesNuevos= meses.splice(1,0,"Febrero");
            console.log(meses);
            ///////////////////////////////////////////////////////////////
            //Ejercicio 7//
            let mochila = ["Cuaderno", "Lapiz"];
            console.log(mochila);
            if (mochila.length < 3 ) 
            {
                mochila.push("regla");
                console.log(mochila);
            }
            /////////////////////////////////////////////////////////////
            //Ejercicio 8//
            const tareas= ["Lavar", "Cocinar"];
            console.log(tareas);

            tareas.pop();
            console.log(tareas);
            //---------------------------------------------------------------//
            //Ejercicio 9//
            const herramientas = ["Martillo", "Destornillador", "Pinza"];
            console.log(herramientas);
            herramientas.splice (1,1,"LLave ingleasa");
            console.log(herramientas);
            //.---------------------------------------------------------------//
            //Ejercicio 10//
            const fila = ["cliente 1", "Cliente 2"];
            fila.push("Cliente 3");
            console.log(fila);
            fila.shift();
            console.log(fila);
        })
    }
        //.--------------------------------------------//
//Bloque 2//

const botonBloqueDos= document.getElementById("botonBloqueDos");
    if (botonBloqueDos)
    {
        botonBloqueDos.addEventListener("click",function()
        {
            //ejercicio1//
            function ejercicio1() 
            {
                const nombres = ["Lucas", "Matias", "Sofía"];
            
                nombres.forEach(nombre => console.log('Alumno: '+ nombre));
            }
            ejercicio1();
            //.--------------------------------------------//
            //ejercicio2//
                const stock= ['Monitor', 'Teclado', 'Mouse'];
                console.log(stock.includes('Parlantes'));
            //.--------------------------------------------//
            //ejercicio3//
                const alumnos= 
                [  
                    {nombre:'Ana', nota:7},
                    {nombre:'Hugo', nota:9},
                    {nombre:'Luz', nota:4}
                ];
                
                console.log(alumnos.find(alumno => alumno.nota > 6));
            //.--------------------------------------------//
                //ejercicio4//
                const premios= ['Oro', 'Plata', 'Bronce'];
                //.--------------------------------------------//
                console.log(premios.findIndex(premio => premio==='plata'));
            //ejercicio5//
                const lista=['chrome','Firefox','Edge'];
                const palabra= document.getElementById("ingresoString");
                function ejercicio5 (lista,palabra)
                {
                    console.log(lista.includes(palabra));
                }
                ejercicio5(lista,palabra);
            //.--------------------------------------------//
            //ejercicio6//
                const puntajes=[10,20,30];
                let total = 0;
                puntajes.forEach(function (numero)
                {
                    total+=numero;
                });
                console.log(total);
            //ejercicio7//
                const precios=[120,80,45,200];
                console.log(precios.find(p => p >50));
            //.--------------------------------------------//
            //ejercicio8//
                const mascotas=['Perro','Gato'];
                console.log(mascotas.findIndex( animal => animal ==='Loro'));
            //ejercicio9//
                const palabras=['hola','mundo'];
                palabras.forEach(function(mayusculas)
                {
                    console.log(mayusculas.toUpperCase());
                });
            //.--------------------------------------------//
            //ejercicio10//
                const ids=[101,102,103,104];
                function ejercicio10 (ids)
                {  
                    console.log(ids.includes(105), 'El ID 105 no está incluido');
                }
                ejercicio10(ids);
                
        })
    }
//.--------------------------------------------//
//Bloque3//
const botonBloqueTres = document.getElementById("botonBloqueTres");
    if (botonBloqueTres)
    {
        botonBloqueTres.addEventListener("click", function ()
        {
            //ejercicio1
            const base=[1,2,3,4,5];
            const baseDos= base.map(n => n*2);
            console.log(baseDos);
            //--------------------
            //ejercicio2
            const edades=[12,18,25,10,30];
            const mayores= edades.filter(n => n >= 18 );
            console.log(mayores);
            //--------------------
            //ejercicios3
            const lista1=['Pan','Leche'];
            const lista2=['Carne','Fruta'];
            const compra= lista1.concat(lista2);
            console.log(compra);
            //---------------------
            //ejercicio4
            const letras=['a','b','c','d','e','f'];
            const letrasNuevo= letras.slice(2,5);
            console.log(letrasNuevo);
            //----------------------
            //ejercicio5
            const items=['Inicio','Contacto'];
            const itemsDos= items.map( item =>"<li>"+ item +"</li>");
            console.log(itemsDos);
            //-----------------------
            //ejercicio6
            const palabras=['sol','computadora','casa','televisor'];
            const palabrasNuevo= palabras.filter(palabras => (palabras.length) > 5);
            console.log(palabrasNuevo);
            //------------------------
            //ejercicio7
            const num= [1,2,3,4,5];
            console.log(num.slice(3));
            //------------------------
            //ejercicio8
            const productos= [
                {id: 1, nombre:'Celular'},
                {id:2, nombre:'Tablet'}
            ];
            const nombresProductos = productos.map(producto => producto.nombre);
            console.log (nombresProductos);
            
            //------------------------
            //ejercicio9
            const valores= [1,2,3,4,5,6,7];
            console.log(valores.filter(n => n % 2 === 0));
            //------------------------
            //ejercicio10
            const a= [1,2];
            const b= [3,4];
            const c= [5,6];
            console.log(a.concat(b.concat(c)));

        })
    }
//----------------------------------------------------
//Bloque4
    const botonBloqueCuatro= document.getElementById("botonBloqueCuatro");
    if (botonBloqueCuatro)
    {
        botonBloqueCuatro.addEventListener("click", function()
        {
            //ejercicio1
            const gastos=[100, 250, 600, 150];
            const totalGastado= gastos.reduce((acc,n) => acc = (acc + n),0);
            console.log(totalGastado);
            //-------------------------------------------------------
            //ejercicio2
            const frase=['JavaScript','es','genial'];
            const fraseCompleta= frase.reduce((contenedor,p) => { return contenedor ==='' ? p: contenedor + ' ' + p});
            console.log(fraseCompleta);
            //---------------------------------
            //ejercicio3
             const notas = [4, 8, 3, 10, 5, 7];
             const aprobados= notas.filter(n => n > 6);
             console.log(aprobados.map(n => n * 10));
             //ejercicio4
            const examen=[7,8,9,10];
            const total= examen.reduce((notaTotal,n) => (notaTotal + n),0);
            console.log(total / examen.length);
            //---------------------------------
            //ejercicio5
            const datos = [-2, 5, 8, -1, 10];
            const positivos= datos.filter(n => n > 0);
            console.log(positivos.map(n => n ** 2));
            //---------------------------------
            //ejercicio6
            const nombres = ['Ana', 'Pedro', 'Ana', 'Juan', 'Ana'];
            const contar= nombres.reduce((contador, palabraActual) => { contador[palabraActual] = (contador[palabraActual] || 0) + 1;
                return contador;   
            },{});
            console.log(contar);
            //----------------------------------
            //ejercicio7
            const movimientos = [100, -50, 200, -100];
            const movimientosSumados= movimientos.reduce((movimientosHechos,n) => (movimientosHechos + n),0);
            console.log(movimientosSumados);
            //----------------------------------
            //ejercicio8
            const original= [1,2,3];
            const copia= original.slice();
            copia.push(4);
            console.log(original,copia);
            //----------------------------------
            //jercicio9
            const nacimientos = [1990, 2005, 2012];
            const edades = nacimientos.map(edad => 2026 - edad );
            console.log (edades);
            //---------------------------------
            //ejercicio10
            const frutas= ['Pera','Uva','Coco'];
            const ul = document.getElementById('lista');
            frutas.forEach(fruta => {
            ul.innerHTML += `<li>${fruta}</li>`;
            });
            

            

            
            


            
        })
    }
   
