import type {
    Pelicula,
    Reserva,
    crearReserva,
    actualizarEstado,
    filtrarPeliculasPorGenero,
} from './reservaciones';

const carteleraInicial: Pelicula[] =[
    {id: 1, titulo: 'El ultimo Robo', genero: 'Accion', duracionMinutos: 110, es3D:true},
];
console.log('Cartelera Inicial:', carteleraInicial);

const peliculaSeleccionada = carteleraInicial[0];
const miReservaPendiente: Reserva = crearReserva(peliculaSeleccionada, 4, 9.50);

console.log('\n2. Reserva Creada:')
console.log('ID:', miReservaPendiente.idReserva, 'Estado:', miReservaPendiente.estado, ', Total:', miReservaPendiente.precioTotal);

const miReservaConfirmada: Reserva = actualizarEstado(miReservaPendiente, 'Confirmada');
console.log('\n3. Estado Actualizado:');
console.log(' Reserva anterior (Pediente):', miReservaPendiente.estado);
console.log(' Reserva nueva (Confirmada):', miReservaConfirmada.estado);
