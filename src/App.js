
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { cargarProductosServicio } from './redux/productosAcciones';

import TablaProductosFiltrable from './componentes/TablaProductosFiltrable';
import AgregarProducto from './componentes/AgregarProducto';

const mapStateToProps = state => {
  return {
    productos: state.productos
  }
}

const mapDispatchToProps = dispatch => ({
  cargarProductosServicio: () => dispatch(cargarProductosServicio)
})

class App extends Component {
  
  componentDidMount() {
    this.props.cargarProductosServicio();
  }
  
  render() {
    //console.log(this.props);
    return (
      <div className="container">
      <div className="row align-items-start justify-content-center">
        <div className="col-md-6">
          <TablaProductosFiltrable />
        </div>
        <div className="col-md-6 visible">
          <AgregarProducto />
        </div>
      </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

