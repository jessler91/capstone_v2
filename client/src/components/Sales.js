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
// import Products from './Products'
// import { addSKU } from '../redux/actions'

const Sales = (props) => {


    return (

        <div>
            <p style={{ marginLeft: '20px' }} >Sales Dashboard</p>
            


            <Container maxWidth="lg" className="sku-dashboard-container">

                {/* <h4>Welcome Dashboard User</h4> */}
                <div className="flex-container"></div>

                <Table>

                    <TableHead>
                        <TableRow>
                            <TableCell>ASIN (Sales)</TableCell>
                            <TableCell>Display Name</TableCell>
                            <TableCell>Sessions</TableCell>
                            <TableCell>PageViews</TableCell>
                            <TableCell>Units Sold (30days)</TableCell>
                        </TableRow>
                    </TableHead>


                    <TableBody>
                        {console.log("props" + props)}
                        {props.sales.map((sale, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell align="left">{sale.ASIN}</TableCell>
                                    <TableCell align="left">{sale.pretty_name}</TableCell>
                                    <TableCell align="left">{sale.sessions}</TableCell>
                                    <TableCell align="left">{sale.pageviews}</TableCell>
                                    <TableCell align="left">{sale.unitsSold}</TableCell>
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