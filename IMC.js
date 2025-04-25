let pacientes = [[]];
let hombres = 0;
let mujeres = 0;
let menores = 0;
let sobrepesoHombres = 0;
let sobrepesoMujeres = 0;
edadHombres = 0;
edadMujeres = 0;
running = true;
while (running) {
    let menu = prompt("Bienvenid@ a la calculadora de IMC:\n1. Registrar paciente\n2. Total Hombre y Mujero registrados\n3. Promedio edad Hombres y Mujeres\n4. Total menores registrados\n5. Total de hombres y mujeres con sobrepeso\n6. Paciente de mas bajo IMC\n7. Salir")
    switch (menu) {
        case "1":
            let nombre = prompt("Ingresa tu nombre:");
            let edad = prompt("Ingrese su edad:");
            if (edad < 18) {
                menores += 1;
            }
            let genero = prompt("Ingresa tu género: \n1. Hombre\n2. Mujer");
            if (genero == "1") {
                hombres += 1;
                edadHombres =+ edad;
            } else if (genero == "2") {
                mujeres += 1;
                edadMujeres =+ edad;
            };
            let peso = prompt("Ingresa tu peso en kg:");
            let estatura = prompt("Ingresa tu estatura en metros:");
            let imc = peso / (estatura ** 2);
            let perfil = [nombre, edad, genero, imc];
            pacientes.push(perfil);
            if (imc < 18.5) {
                alert("Hola " + nombre + ", tu IMC es de: " + imc + ". Por lo tanto tu peso es inferior al normal.");
            } else if (imc <= 24.9) {
                alert("Hola " + nombre + ", tu IMC es de: " + imc + ". Por lo tanto tu peso es normal.");
            } else if (imc <= 29.9) {
                alert("Hola " + nombre + ", tu IMC es de: " + imc + ". Por lo tanto tu peso es superior normal.");
                if (genero == "1") {
                    sobrepesoHombres += 1;
                }
                else {
                    sobrepesoMujeres += 1;
                }
            }
            else {
                alert("Hola " + nombre + ", tu IMC es de: " + imc + ". Por lo tanto tienes obesidad.");
                if (genero == "1") {
                    sobrepesoHombres += 1;
                }
                else {
                    sobrepesoMujeres += 1;
                }
            }
            break
        case "2": 
            alert("Los hombres registrados fueron: " + hombres + "\nLas mujeres registradas fueron: " + mujeres);
            break
        case "3":
            let promedioHombresEdades = edadHombres / hombres;
            let promedioMujeresEdades = edadMujeres / mujeres;
            alert("El promedio de edad de los hombres es: " + promedioHombresEdades + " y el promedio de edad de las mujeres es: " + promedioMujeresEdades);
            break
        case "4":
            alert("Se registraron: " + menores + " menores");
            break
        case "5":
            alert("Se registraron " + sobrepesoHombres + " hombres con sobrepeso y " + sobrepesoMujeres + " mujeres con sobrepeso.");
            break
        case "6":
            let menIMC = pacientes[1];
            for (let i = 1; i < pacientes.length; i++)
                if (pacientes[i].imc < menIMC.imc) {
                    menIMC = pacientes[i];
                }
            alert(`${menIMC}`)
            break;
        case "7":
            alert("Gracias por usar el programa...");
            running = false
        }
}
console.table(pacientes)