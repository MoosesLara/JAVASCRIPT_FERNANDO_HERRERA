let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Iroman',
    vivo: 'false',
    edad: '40',
    Coors:{
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion:{
        zip: '10800, 90265',
        ubicacion: 'Malibu, California'
    }
};

console.log('No. Trajes', personaje.trajes.length);
console.log('Ultimo traje', personaje.trajes[personaje.trajes.length - 1]);


