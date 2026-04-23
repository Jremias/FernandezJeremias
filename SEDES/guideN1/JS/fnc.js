

//Ejercicio 1//
            const botonSaludar= document.getElementById("botonSaludar");
            if (botonSaludar) 
            {
                botonSaludar.addEventListener("click", function()
                {
                    alert("¡hola, Mundo!");
                    console.log("ejercicio1 listo");
                
                });
            }
    //---------------------------------------------//
//Ejercicio 2//
    const botonSaludoNombre = document.getElementById("botonSaludarNombre");
        if (botonSaludoNombre) 
        {
            botonSaludoNombre.addEventListener("click", function ()
            {
                    const nombreSaludo= document.getElementById("nombre").value;
                    document.getElementById("resultado").textContent= "¡Hola, "+ nombreSaludo + "!";
                    console.log("ejercicio2 listo")
            })
        }
//--------------------------------------------------------------------------------------------------------------------//
//Ejercicio 3//

        const botonVerificadorPalabra = document.getElementById("botonVerificarPalabra");
            if (botonVerificadorPalabra)
            {
                
                botonVerificadorPalabra.addEventListener("click", function ()
                {
                    if (isNaN(verificarPalabra.value))
                    {
                        
                        document.getElementById("resultadoVerificarPalabra").textContent="No es un número valido, y lo escrito es de tipo: " + (typeof verificarPalabra.value)
                        console.log("ejercicio3 listo");
                    }
                    else 
                    {
                        
                        document.getElementById("resultadoVerificarPalabra").textContent= "Es un número valido, y lo escrito es de tipo: " + (typeof verificarPalabra);
                        console.log("ejercicio3 listo");
                    }
                })
            }
//.-----------------------------------------------------------------------------------------.//
//Ejercicio 4//
    const botonCalcular= document.getElementById("botonCalcular");
        if (botonCalcular)
        {
            botonCalcular.addEventListener("click", function()
                {
                    let operacionBotonCalcular= (25*4-10);
                    console.log(operacionBotonCalcular);
                    document.getElementById("resultadoBotonCalcular").textContent= operacionBotonCalcular;
                })
            

        }