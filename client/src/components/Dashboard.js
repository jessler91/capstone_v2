import React from 'react'


// import {
//     Container,
//     Table,
//     TableBody,
//     TableCell,
//     TableHead,
//     TableRow
// } from '@material-ui/core'

import DeleteIcon from '@material-ui/icons/Delete'
// import { addSKU } from '../redux/actions'

const Dashboard = (props) => {
    return (
        <div>

            <p>Here is the dashboard, map through skus json file and display Products</p>
            {/* <AddSKU /> */}

            {/* <Container maxWidth="lg" className="sku-dashboard-container">

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
                        {props.products.map((product, index) => (
                            <TableRow key={product.sku}>
                                <TableCell component="th" scope="row">{product.sku}</TableCell>
                                <TableCell>{product["name"]}</TableCell>
                                <TableCell>{product["qty"]}</TableCell>
                                <TableCell>
                                    <DeleteIcon
                                        // add onClick method here
                                        onClick={() => props.deleteSKU(index)}
                                        className="icon text-red" 
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                </Table>


            </Container> */}
            
        </div>
    )
}





export default Dashboard



