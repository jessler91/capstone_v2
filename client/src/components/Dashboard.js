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
import maininv from './main_image.png'
import inv from './inv_image.png'
import saleimg from './sales_image.png'
// import Products from './Products'
// import { addSKU } from '../redux/actions'

const Dashboard = (props) => {

    return (
        <div>
            <h4 style={{ marginLeft: "20px" }}>Welcome Dashboard User</h4>
            <img className="img" src={maininv} alt="Logo" />
            <br />
            

            {/* <p style={{ marginLeft: '20px', margin: "5px" }} >Here is our dashboard, map through skus json file and display Products</p>
            <p style={{ marginLeft: '20px', margin: "5px" }} >Click on the Merchant SKU column to see additional inventory details</p>
            <p style={{ marginLeft: '20px', margin: "5px" }} >Click on the ASIN column to see additional sales details</p> */}

            <Container maxWidth="lg" className="sku-dashboard-container">
                <hr />
                <br />
                <div className="flex-container">
                    <div><Link to={`/sku-inventory/`}>Current Inventory Status Dashboard</Link></div>
                    <div><Link to={`/sku-sales/`}>Sales / Session Traffic Dashboard</Link></div>
                </div>
                <br />
                <hr />

                <Table>

                    <TableHead>
                        <TableRow className="bold">
                            <TableCell className="bold">Merchant SKU (link to product details)</TableCell>
                            <TableCell>Child ASIN</TableCell>
                            <TableCell>Display Name</TableCell>
                            <TableCell>Brand Name</TableCell>
                            <TableCell>Remove Listing</TableCell>
                        </TableRow>
                    </TableHead>


                    <TableBody>
                        {console.log("props" + props)}
                        {props.display.map((dplay, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell align="left">
                                        <Link to={`/sku-details/${dplay.Merchant_SKU}`}>{dplay.Merchant_SKU}</Link>
                                    </TableCell>
                                    <TableCell align="left">{dplay.ASIN}</TableCell>
                                    <TableCell align="left">{dplay.Display_Name}</TableCell>
                                    <TableCell align="left">{dplay.Brand}</TableCell>
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



