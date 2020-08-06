import React from 'react'

import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@material-ui/core'

import { Link } from 'react-router-dom'
import SKUInventory from '../containers/Inventory'
import inv from './inv_image.png'
import '../App.css'
// import Products from './Products'
// import { addSKU } from '../redux/actions'

const Inventory = (props) => {

    // const imageStyle = {
    //     margin: "auto 0",
    //     height: "250px",
    //     width: "500px"
    // }


    return (

        <div>
            <br />
            {/* <p style={{ marginLeft: '20px' }} >Inventory Dashboard</p> */}
            <img className="img" src={inv} alt="Logo" />


            <Container maxWidth="lg" className="sku-dashboard-container">

                <h4>Welcome Dashboard User</h4>
                <div className="flex-container"></div>

                <Table>

                    <TableHead>
                        <TableRow>
                            <TableCell>Merchant SKU</TableCell>
                            <TableCell>Product Name</TableCell>
                            <TableCell>Warehouse QTY</TableCell>
                            <TableCell>Fulfillable QTY</TableCell>
                            <TableCell>Unsellable QTY</TableCell>
                            <TableCell>FBA Total QTY</TableCell>
                            <TableCell>Inbound Working QTY</TableCell>
                            <TableCell>Inbound Shipped QTY</TableCell>
                            <TableCell>Inbound Receiving QTY</TableCell>
                        </TableRow>
                    </TableHead>


                    <TableBody>
                        {console.log("props" + props)}
                        {props.inventory.map((inv, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell align="left">
                                        <Link to={`/sku-details/${inv.sku}`}>{inv.sku}</Link>
                                    </TableCell>
                                    <TableCell align="left">{inv.pretty_name}</TableCell>
                                    <TableCell align="left">{inv.afn_warehouse_quantity}</TableCell>
                                    <TableCell align="left">{inv.afn_fulfillable_quantity}</TableCell>
                                    <TableCell align="left">{inv.afn_unsellable_quantity}</TableCell>
                                    <TableCell align="left">{inv.afn_total_quantity}</TableCell>
                                    <TableCell align="left">{inv.afn_inbound_working_quantity}</TableCell>
                                    <TableCell align="left">{inv.afn_inbound_shipped_quantity}</TableCell>
                                    <TableCell align="left">{inv.afn_inbound_receiving_quantity}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>

                </Table>

            </Container>
            
        </div>
    )
}





export default Inventory