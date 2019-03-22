import * as Acciones from './tipoAcciones'

var estado_inicial = {
            productos: [
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
            ],
            formularioAgregarVisible: 'No'
        };

export const productos = (state = estado_inicial, Action) => {
    switch(Action.type) {
        case Acciones.CARGAR_PRODUCTOS:
            return{
                ...state,
                productos: Action.payload
            };

        case Acciones.AGREGAR_PRODUCTO:
            return{
                ...state,
                productos: [...state.productos, Action.payload]
            };

        default:
            return estado_inicial;
    }

  }


  /*
  var estado_inicial = {
            productos: [
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
            ]
    };
    */