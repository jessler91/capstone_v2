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
// import { Link } from 'react-router-dom'
// import Products from './Products'
// import { addSKU } from '../redux/actions'

const Dashboard = (props) => {


    return (

        <div>
            <p style={{ marginLeft: '20px' }} >Here is our dashboard, map through skus json file and display Products</p>
            <p style={{ marginLeft: '20px' }} >Click on the Merchant SKU column to see additional inventory details</p>
            <p style={{ marginLeft: '20px' }} >Click on the ASIN column to see additional sales details</p>

            <Container maxWidth="lg" className="sku-dashboard-container">

                <h4>Welcome Dashboard User</h4>
                <div className="flex-container"></div>

                <Table>

                    <TableHead>
                        <TableRow>
                            <TableCell>Merchant SKU</TableCell>
                            <TableCell>ASIN</TableCell>
                            <TableCell>Display Name</TableCell>
                            <TableCell>Fulfillable Quantity</TableCell>
                            <TableCell>Remove Listing</TableCell>
                        </TableRow>
                    </TableHead>


                    <TableBody>
                        {console.log("props" + props)}
                        {props.display.map((dplay, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell align="left">{dplay.sku}</TableCell>
                                    <TableCell align="left">{dplay.asin}</TableCell>
                                    <TableCell align="left">{dplay.name}</TableCell>
                                    <TableCell align="left">{dplay.qty}</TableCell>
                                    <TableCell>
                                        <DeleteIcon onClick={() => props.removeProduct(index)} />
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>

                </Table>

            </Container>
            
        </div>
    )
}





export default Dashboard



