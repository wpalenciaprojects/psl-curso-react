import * as Acciones from './tipoAcciones'
//import { dispatch } from 'rxjs/internal/observable/range';

export const cargarProductos = (productos) => ({
    type: Acciones.CARGAR_PRODUCTOS,
    payload: productos
})
  
export const agregarProducto = (producto) => ({
    type: Acciones.AGREGAR_PRODUCTO,
    payload: producto
})

export const agregarProductoState = (dispatch, producto) => {
    //console.log(producto);
    dispatch(agregarProducto(producto));
}

export const cargarProductosServicio = (dispatch) => {
  
    return fetch('http://my-json-server.typicode.com/luribeto/reactjs-course-data/products')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(productos => {
      setTimeout(() => {
//          console.log(productos);
        dispatch(cargarProductos(productos));
      }, 2000)
    })
//    .catch(error => dispatch(productsFailed(error.message)));
  }