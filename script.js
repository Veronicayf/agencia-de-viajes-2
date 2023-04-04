
class Reserva {
    constructor(nombreViajero, paquete, costo, fechaViaje) {
      this.nombreViajero = nombreViajero;
      this.paquete = paquete;
      this.costo = costo;
      this.fechaViaje = fechaViaje;
    }
  
  }
  
  const viajes = [];
  
  viajes.push(new Reserva("Mario Gomez", "Cata de vinos", 3000, "5/mayo/2023"));
  viajes.push(new Reserva("Roberta Molina", "Visita al obelisco", 15000, "15/Julio/2023"));
  viajes.push(new Reserva("Maria Perez", "Paseo en helicoptero", 9000, "23/Abril/2023"));
  viajes.push(new Reserva("Ivana Casas", "Disneyland", 28000, "18/Julio/2023"));
  
  console.log(viajes);
  
  function buscarPaquete(buscarPaquete) {
    return viajes.find((dato) => dato.paquete == buscarPaquete);
  }
  
  do {
    let busqueda = buscarPaquete(
      prompt(
        " Aqui puedes ver mas detalles de los paquetes solo Ingresa el nombre" +
          "\n" +
          "Cata de vinos" +
          "\n" +
          "Visita al obelisco" +
          "\n" +
          "Paseo en helicoptero" +
          "\n" +
          "Disneyland"
      )
    );
  
    if (busqueda !== undefined) {
      alert(
        "El paquete: " +
          busqueda.paquete +
          "\n" +
          "Tiene un costo de $" +
          busqueda.costo +
          "\n" +
          "Con fecha para el: " +
          busqueda.fechaViaje
      );
    } else {
      alert("Ese paquete no existe");
    }
  } while (confirm("¿Desea realizar otra búsqueda?"));
  
  
  
  function cotizarPaquete(paquete, cuota) {
    let precio;
  
    switch (paquete) {
      case 1:
        precio = 3000;
        break;
      case 2:
        precio = 1500;
        break;
      case 3:
        precio = 9000;
        break;
      case 4:
        precio = 28000;
        break;
      default:
        alert("No ingresó un número de paquete válido");
        return;
    }
  
    switch (cuota) {
      case 1:
        alert(`El precio es de $${precio}`);
        break;
      case 3:
      case 6:
      case 12:
        alert(`El precio es de $${precio / cuota} por mes`);
        break;
      default:
        alert("No ingresó un número de cuota válido");
    }
  }
  do {
    const paquete = Number(prompt("Ingrese el número del paquete turístico deseado:"+
    "\n" +
          "1- Cata de vinos" +
          "\n" +
          "2- Visita al obelisco" +
          "\n" +
          "3-Paseo en helicoptero" +
          "\n" +
          "4- Disneyland"));
    const cuota = Number(prompt("Ingrese el número de cuotas en que desea pagar (1, 3, 6, 12):"));
  
    cotizarPaquete(paquete, cuota);
  } while (confirm("¿Desea hacer otra cotización?"));
  