
import React, { Component } from 'react';

import { connect } from 'react-redux';

import FilaProducto from './FilaProducto';

class TablaProductosFiltrable extends Component {
  render() {

    return (
      <React.Fragment>
            <h1>Tabla de productos</h1>
            <table>
                <thead>
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
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps)(TablaProductosFiltrable);

/*
{this.props.productos.map((producto) => {
  return <FilaProducto  key={producto.name} producto={producto} />
})}
*/