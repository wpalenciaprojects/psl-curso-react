
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { cargarProductosServicio } from './redux/productosAcciones';

import TablaProductosFiltrable from './componentes/TablaProductosFiltrable';
import AgregarProducto from './componentes/AgregarProducto';

let agregar = 'invisible'

const mapStateToProps = state => {
  return {
//    productos: state.productos
      state
  }
}

const mapDispatchToProps = dispatch => ({
  cargarProductosServicio: () => dispatch(cargarProductosServicio)
});

class App extends Component {

  constructor(props) {
    super(props);
    this.divAgregar = React.createRef();
    this.botonAgregar = React.createRef();
    this.verOcultar = this.verOcultar.bind(this);
  }

  verOcultar() {
    if (agregar === 'visible'){
      this.divAgregar.current.className = 'invisible';
      this.botonAgregar.current.value = 'Agregar producto';
      agregar = 'invisible'
    } else {
      this.divAgregar.current.className = 'visible'
      this.botonAgregar.current.value = 'Cancelar';
      agregar = 'visible'
    }
    // console.log(agregar);
  }
  
  componentDidMount() {
    // console.log(this.props);
    this.props.cargarProductosServicio();
  }
  
  render() {
    //console.log(this.props);
    return (
      <div className="container">
      <br /> <br /> <br />
      <div className="row align-items-start justify-content-center">
        <div className="col-md-6">
          <TablaProductosFiltrable />
          <br />
          <input name="" ref={this.botonAgregar} className="btn btn-secondary" type="button" value="Agregar producto" onClick={this.verOcultar}/>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-5">
          <br /> <br /> <br />
          <div ref={this.divAgregar} className={agregar}>
            <AgregarProducto />
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

