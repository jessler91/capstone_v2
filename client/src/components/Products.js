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
        console.log("props: ", this.props);
        console.log('LENGTH: ', this.props.products.length);
        // if (this.state.loading) {
        //     return <div> loading... </div>
        // }
        
        // if (this.state.products) {
        //     return <div> didn't get a product </div>
        // }

        return (
            <div>
                <p>Product Inventory Page</p>
                <Container maxWidth="lg" className="sku-dashboard-container">
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Merchant SKU</TableCell>
                                <TableCell>Child ASIN</TableCell>
                                <TableCell>Product Name</TableCell>
                                <TableCell>Fulfillable Quantity</TableCell>
                                <TableCell>Total Quantity</TableCell>
                                <TableCell>Inbound Receiving</TableCell>
                                <TableCell>Inbound Working</TableCell>
                                <TableCell>Delete</TableCell>
                            </TableRow>
                        </TableHead>


                        <TableBody>

                        
                        {this.props.products.length > 0 && this.props.products.map((product, id) => (
                           
                            
                                <TableRow key={id}>

                                    <TableCell align="left">
                                        <Link to={`/sku-details/${product.sku}`}>{product.sku}</Link>
                                    </TableCell>
                                    <TableCell align="left">{product.asin}</TableCell>
                                    <TableCell align="left">{product.product_name}</TableCell>
                                    <TableCell align="left">{product.afn_fulfillable_quantity}</TableCell>
                                    <TableCell align="left">{product.afn_total_quantity}</TableCell>
                                    <TableCell align="left">{product.afn_inbound_receiving_quantity}</TableCell>
                                    <TableCell align="left">{product.afn_inbound_working_quantity}</TableCell>
                                    <TableCell>Delete</TableCell>
                                </TableRow>
                            
                        ))}

                    </TableBody>

                    </Table>
                </Container>
            </div>
        );
    }
}

export default Products
