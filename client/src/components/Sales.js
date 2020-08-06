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
import saleimg from './sales_image.png'
// import Products from './Products'
// import { addSKU } from '../redux/actions'

const Sales = (props) => {


    return (

        <div>
            <br />
            {/* <p style={{ marginLeft: '20px' }} >Sales Dashboard</p> */}
            <img className="img" src={saleimg} alt="Logo" />
            <br />


            <Container maxWidth="lg" className="sku-dashboard-container">

                {/* <h4>Welcome Dashboard User</h4> */}
                <div className="flex-container"></div>

                <Table>

                    <TableHead>
                        <TableRow>
                            <TableCell>Merchant SKU</TableCell>
                            <TableCell>Display Name</TableCell>
                            <TableCell>Sessions Traffic</TableCell>
                            <TableCell>Page Views</TableCell>
                            <TableCell>Conversion Rate</TableCell>
                            <TableCell>Units Sold (last 30 days)</TableCell>
                            <TableCell>Revenue (last 30 days)</TableCell>
                        </TableRow>
                    </TableHead>


                    <TableBody>
                        {console.log("props" + props)}
                        {props.sales.map((sale, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell align="left">{sale.sku}</TableCell>
                                    <TableCell align="left">{sale.pretty_name}</TableCell>
                                    <TableCell align="left">{sale.Sessions}</TableCell>
                                    <TableCell align="left">{sale.Page_Views}</TableCell>
                                    <TableCell align="left">{sale.Unit_Session_Percentage}</TableCell>                        
                                    <TableCell align="left">{sale.Units_Ordered}</TableCell>
                                    <TableCell align="left">{sale.Ordered_Product_Sales}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>

                </Table>

            </Container>
            
        </div>
    )
}





export default Sales