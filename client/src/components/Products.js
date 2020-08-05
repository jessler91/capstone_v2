import React, { Component } from 'react'
// import { getProducts  } from "../redux/actions"
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@material-ui/core'

import DeleteIcon from '@material-ui/icons/Delete'
import { Link } from 'react-router-dom'

export class Products extends Component {
  
    state = { 
        loading: false,
        products: [],
    }

    componentDidMount() {
        this.props.getProducts()
    }
 

    render() {
        console.log("state: ", this.props);
        // if (this.state.loading) {
        //     return <div> loading... </div>
        // }
        
        // if (this.state.products) {
        //     return <div> didn't get a product </div>
        // }

        return (
            <div>
                <p>Product Sales Page</p>
                <Container maxWidth="lg" className="sku-dashboard-container">
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ASIN</TableCell>
                                <TableCell>Product Name</TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell>Delete</TableCell>
                            </TableRow>
                        </TableHead>


                        <TableBody>

                        {console.log("props" + this.props)}
                        
                        {this.props.products.length > 0 && this.props.products.map((product, id) => {
                            return (
                                

                                <TableRow key={id}>

                                    <TableCell align="left">
                                        <Link to={`/sku-details/${product.asin}`}>{product.asin}</Link>
                                    </TableCell>
                                    <TableCell align="left">{product.product_name}</TableCell>
                                    <TableCell align="left">{product.afn_warehouse_quantity}</TableCell>

                                    <TableCell>
                                        <DeleteIcon onClick={() => this.props.removeProduct(id)} />
                                    </TableCell>
                                </TableRow>
                            );
                        })}

                    </TableBody>

                    </Table>
                </Container>
            </div>
        );
    }
}

export default Products
