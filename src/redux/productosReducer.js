import * as Acciones from './tipoAcciones'

var estado_inicial = [
    {
        category: "Sporting Goods",
        price: "$49.99",
        stocked: true,
        name: "Football"
    },
    {
        category: "Electronics",
        price: "$99.99",
        stocked: true,
        name: "iPod Touch"
    }
];

export const productos = (state = estado_inicial, Action) => {
    switch(Action.type) {
        case Acciones.CARGAR_PRODUCTOS:
            return '';

        default:
            return estado_inicial;
    }

  }