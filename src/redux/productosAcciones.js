import * as Acciones from './tipoAcciones'

export const cargarProductos = (productos) => ({
    type: Acciones.CARGAR_PRODUCTOS,
    payload: productos
})
  
export const agregarProducto = (producto) => ({
    type: Acciones.AGREGAR_PRODUCTO,
    payload: producto
})




