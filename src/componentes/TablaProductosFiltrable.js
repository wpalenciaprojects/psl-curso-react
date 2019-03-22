
import React, { Component } from 'react';

import { connect } from 'react-redux';

import FilaProducto from './FilaProducto';

function mostrarFormularioAgregar () {
  console.log(this.props.productos);
}

class TablaProductosFiltrable extends Component {
  render() {

    return (
      <React.Fragment>
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
            <br />
            <input name="" ref={this.botonMostrar} className="btn btn-secondary" type="button" value="Agregar" onClick={mostrarFormularioAgregar}/>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
    return {
        productos: state.productos,
        formularioVisible: state.formularioAgregarVisible
//          state
    }
}

export default connect(mapStateToProps)(TablaProductosFiltrable);

/*
{this.props.productos.map((producto) => {
  return <FilaProducto  key={producto.name} producto={producto} />
})}
*/