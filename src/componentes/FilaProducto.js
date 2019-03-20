import React, {Component} from 'react';

class FilaProducto extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render(){
        return(
            <tr>
                <td> {this.props.producto.name} </td>
                <td> {this.props.producto.price} </td>
            </tr>
        )
    }

}   

 export default FilaProducto;