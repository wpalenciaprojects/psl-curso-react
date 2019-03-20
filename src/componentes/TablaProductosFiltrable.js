
import React, { Component } from 'react';

import { connect } from 'react-redux';

import FilaProducto from './FilaProducto';

class TablaProductosFiltrable extends Component {
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
            <h1>Tabla de productos</h1>
            <table>
                <thead>
                    <th>Nombre</th>
                    <th>Precio</th>
                </thead>
                <tbody>
                    {this.props.productos.map((producto) => {
                        return <FilaProducto producto={producto} />
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