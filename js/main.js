const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;
        //FUNCIÓN DE LIMPIAR PANTALLA
        if (boton.id === "c") {
            //Si se presiona el botón con id igual a "c", entonces el valor de la pantalla será "0"
            pantalla.textContent = "0";
            return;//Return para que ahí termine la función, porque sino, se hace una paradoja
        }
        //FUNCIÓN DE BORRAR
        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1) {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }
        //FUNCIÓN PARA EVALUAR LAS OPERACIONES EN PANTALLA
        if (boton.id === "igual"){
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = "Error!";
            }
            return;
        }
        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            //Si el contenido de la pantalla tiene 0, será sustituido por el valor que tenga el botón apretado
            pantalla.textContent = botonApretado;
        } else {
            //Y si no tiene 0, pues que siga sumando otros numeros
            pantalla.textContent += botonApretado;
        }
    })
})