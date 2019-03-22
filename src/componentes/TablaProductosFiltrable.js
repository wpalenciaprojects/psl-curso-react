
import React, { Component } from 'react';

import { connect } from 'react-redux';

import FilaProducto from './FilaProducto';
/*
function dibujarFilas(productos) {
    const categorias = productos.map(categoria => productos.category);
    console.log(categorias);

}
*/
class TablaProductosFiltrable extends Component {
  render() {

    return (
      <div align='center'>
            <h1>Tabla de productos</h1>
            <br />
            <table className='table table-hover'>
                <thead className='thead-dark'>
                  <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.productos.productos.map((producto) => {
                    return <FilaProducto  key={producto.name} producto={producto} />
                  })}
                </tbody>
            </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        productos: state.productos,
//          state
    }
}

export default connect(mapStateToProps)(TablaProductosFiltrable);

/*
{this.props.productos.map((producto) => {
  return <FilaProducto  key={producto.name} producto={producto} />
})}
*/

//             <button onClick={dibujarFilas(this.props.productos.productos)}> prueba </button>