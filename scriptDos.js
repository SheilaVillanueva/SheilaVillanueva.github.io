function calcular(peso) {
    var peso = document.getElementById("peso");
    peso = parseFloat(peso.value);
    console.log(peso);
    let mantenimientoUno;
    let mantenimientoDos;
    let elementoUno = document.getElementById("volumenDiario");
    let elementoDos = document.getElementById("mantenimiento");
    let elementoTres = document.getElementById("mm2");
    var valido = document.getElementById("noValor");
    let volumenDiario;
    var info = document.getElementById("info")
    /**
     * El primer if va a analizar si se ingresó algun valor, de no ser el caso 
     * se mostrará un mensaje por pantalla pidiendo que se ingrese un peso.
     */
    if (isNaN(peso)) {
        console.log("Ingresar el peso");
        valido.innerHTML = "Ingresar un numero.";
        valido.style.display = "block";
        elementoUno.style.display = "none";
        elementoDos.style.display = "none";
        elementoTres.style.display = "none";

        info.innerHTML =
            "<h3> Debes cargar un peso válido para poder calcular la hidratación</h3>";
    }
    /**
     * El segundo caso es por si el usuario ingresa un valor menor o igual a cero, en este
     * caso tambien se mostrará un mensaje pidiendo que se ingrese un peso válido.
     */
    else if (peso <= 0) {
        console.log("El peso ingresado no es válido.");
        var menorCero = document.getElementById("noValor");
        menorCero.innerHTML = "El peso debe ser mayor a 0.";
        elementoUno.style.display = "none";
        elementoDos.style.display = "none";
        elementoTres.style.display = "none";
        menorCero.style.display = "block";
        /**
         * En el tercer caso se va a evaluar si es el método de Holliday (menos de 30 kilos)
         */

        info.innerHTML =
            "<h3> Debes cargar un peso válido para poder calcular la hidratación </h3>";
    } else if (peso <= 30) {

        if (peso <= 10) {
            volumenDiario = peso * 100;
        } else if (peso <= 20) {
            volumenDiario = (1000 + (peso - 10) * 50);
        } else if (peso <= 30) {
            volumenDiario = (1500 + (peso - 20) * 20);
        }
        let mantenimiento = volumenDiario / 24;

        let mm2 = mantenimiento * 1.5;


        volumenDiarioUno = document.getElementById("volumenDiario");
        console.log("El volumen diario es de: " + volumenDiario + "cc");
        volumenDiarioUno.textContent = "El volumen diario es de: " + volumenDiario + "cc";

        mantenimientoUno = document.getElementById("mantenimiento");
        console.log("El mantenimiento es de: " + mantenimiento.toFixed(2) + " cc/hr");
        mantenimientoUno.textContent = "El mantenimiento es de: " + mantenimiento.toFixed(2) + " cc/hr";
        mm2Uno = document.getElementById("mm2");
        console.log("El m+m/2 es de: " + mm2.toFixed(2) + " cc/hr");
        mm2Uno.textContent = "El m+m/2 es de: " + mm2.toFixed(2) + " cc/hr";

        volumenDiarioUno.style.display = "block";
        mantenimientoUno.style.display = "block";
        mm2Uno.style.display = "block";
        valido.style.display = "none";

        info.innerHTML =
            "<h2>Holliday-Segar.</h2>" +
            "<li>De 0 Kg a 10 Kg, se calcula 100cc por cada kilo.</li>" +
            "<li>Se suman 50cc por cada kilo de peso por arriba de 10 Kg, hasta 20 Kg.</li>" +
            "<li>De 20 Kg para arriba, se suman 20cc por cada kilo adicional.</li>"
/**
 * En este ultimo caso se toma como que el peso es mayor a 30 ya que es el ultimo caso a tener en cuenta,
 * se utiliza el metodo de superficie corporal
 */
    } else {
        volumenDiario = ((peso * 4) + 7) / (peso + 90) * 1500;
        mantenimientoUno = (volumenDiario * 1500).toFixed(2);
        mantenimientoDos = (volumenDiario * 2000).toFixed(2);

        elementoDos.innerHTML = "El mantenimiento *1500: " + mantenimientoUno + "cc." + "<br>El mantenimiento *2000 es: </br>" + mantenimientoDos + "cc"
        elementoDos.style.display = "block";
        elementoTres.style.display = "none";


        info.innerHTML =
            "<h2>Método de superificie corporal.</h2>" +
            "<li>Se calcula la superificie corporal por medio de la siguiente formula: <b> ( (peso * 4) + 7) / (peso + 90) </b> </li>" +
            "<li>Luego se multiplica el resultado por 2000 o por 1500 según se considere , ambos resultados se encuentran </li>"
    }
}





