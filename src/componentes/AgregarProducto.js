
import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as Acciones from '../redux/tipoAcciones'

import { agregarProductoState } from '../redux/productosAcciones';

const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = dispatch => ({
    agregarProductoState: () => dispatch(agregarProductoState)
})

class AgregarProducto extends Component {

    constructor(props) {
        super(props);
        this.inputNombre = React.createRef();
        this.inputCategoria = React.createRef();
        this.inputPrecio = React.createRef();
        this.botonAgregar = React.createRef();

        this.agregarProducto = this.agregarProducto.bind(this);
    }
    
    agregarProducto(){

        let nuevoProducto = {
            category: this.inputCategoria.value,
            price: this.inputPrecio.value,
            stocked: true,
            name: this.inputNombre.value
        }
        //console.log(this.inputNombre.value + this.inputCategoria.value + this.inputPrecio.value);
        console.log(nuevoProducto);
        this.props.agregarProductoState({
            type: Acciones.AGREGAR_PRODUCTO,
            payload: nuevoProducto
        })
    }


    render() {

    return (
      <React.Fragment>
            <h1>Agregar productos</h1>
            <table>
                <tbody>
                    <tr>
                        <td> 
                          <label>Categoria</label>
                          <input type="text"
                            className="form-control" ref={input => {this.inputCategoria = input;}} name="inputCategoria" id="" aria-describedby="helpId" placeholder="" />
                        </td>
                    </tr>
                    <tr>
                        <td> 
                          <label>Nombre</label>
                          <input type="text"
                            className="form-control" ref={input => {this.inputNombre = input;}} name="inputNombre" id="" aria-describedby="helpId" placeholder="" />
                        </td>
                    </tr>
                    <tr>
                        <td> 
                          <label>Precio</label>
                          <input type="text"
                            className="form-control" ref={input => {this.inputPrecio = input;}} name="inputPrecio" id="" aria-describedby="helpId" placeholder="" />
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                            <br />
                            <input name="" ref={this.botonAgregar} className="btn btn-primary" type="button" value="Agregar" onClick={this.agregarProducto}/>
                        </td>
                    </tr>
                </tbody>
            </table>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AgregarProducto);