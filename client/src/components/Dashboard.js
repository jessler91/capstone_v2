import React from 'react'

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
import Products from './Products'
// import { addSKU } from '../redux/actions'

const Dashboard = (props) => {
    return (
        <div>

            <p>Here is the dashboard, map through skus json file and display Products</p>

            <Container maxWidth="lg" className="sku-dashboard-container">

                <h4>Welcome, Dashboard User Dan</h4>
                <div className="flex-container">

                </div>


                <Table>

                    <TableHead>
                        <TableRow>
                            <TableCell>Merchant SKU</TableCell>
                            <TableCell>Display Name</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>


                    <TableBody>

                    {console.log("props" + props)}
                    
                    {props.products.map((product, id) => {
                        return (
                            

                            <TableRow key={id}>

                            <TableCell align="left">
                                <Link to={`/sku-details/${product.id}`}>{product.sku}</Link>
                            </TableCell>
                            <TableCell align="left">{product.name}</TableCell>
                            <TableCell align="left">{product.qty}</TableCell>
                        {document.cookie === "loggedIn=true" ? (
                            <TableCell>
                                <DeleteIcon onClick={() => props.removeProduct(id)} />
                            </TableCell>
                        ) : null}

                            </TableRow>
                        );
                    })}

                </TableBody>

                </Table>


            </Container>


            {/* Attempting to display products from the database */}
            <Products />
            
        </div>
    )
}





export default Dashboard



