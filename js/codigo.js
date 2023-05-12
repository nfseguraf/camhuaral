// Fuente de datos con la lista de actividades
var cursos = [
    [ "Taller de pintura", 100, "3 meses", "Lunes a Viernes de 18:00 a 20:00" ],
    [ "Taller de baile",  150, "6 meses",  "Martes y Jueves de 14:00 a 16:00" ],
    [ "Taller de identidad",  120,  "4 meses",  "Miércoles y Viernes de 19:00 a 21:00" ]
  ];
  
  
  function buscarElemento(elemento) {
    
    for (var i = 0; i < cursos.length; i++) {
      
      for (var j = 0; j < cursos[i].length; j++) {
        
        if (cursos[i][j] === elemento) {
          return [i, j]; 
        }
      }
    }
    return null; 
}
    
  
var elementoBuscado = "Taller de identidad";
var posicion = buscarElemento(elementoBuscado);

// Imprime el resultado
if (posicion) {
  console.log("El elemento " + elementoBuscado + " se encontró en la posición [" + posicion[0] + ", " + posicion[1] + "]");
} else {
  console.log("El elemento " + elementoBuscado + " no se encontró en la base de datos.");
}