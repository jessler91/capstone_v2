import React, { Component } from 'react'
import { Container, Divider } from '@material-ui/core'
import { Link } from 'react-router-dom'
import HPVideo from "./HPVideo.js"

// This is the Homepage of my App
// This page shouldnt have state

export default class Homepage extends Component {

    render() {

        const ulStyle = {
            // display: "flex", 
            // justifyContent: "space-around", 
            // listStyle: "none",
          }

          const divStyle = {
            display: "flex", 
            justifyContent: "space-around", 
            listStyle: "none",
            margin: "auto",
            marginRight: "30px",
            width:"800",
            height:"408",
            // borderStyle: "5px",
            // borderColor: "black",
            // borderWidth: "2px",
            border: "2px solid red"
          }

        return (

            <div className="App-Homepage">

                <Container maxWidth="sm">
                    
                    <br></br>
                    <br></br>

                    <h1 style={{ textAlign: 'center' }}>FBA Planning Shipment App</h1>
                    <p style={{ textAlign: 'center' }}>Are you a seller tired of endlessly scrolling in excel to manage Amazon FBA Inventory?</p>

                    <Divider />

                    {/* I spent hours trying to center this video on the page prior to recording my final video */}
                    {/* Its unfortunante, but I am not proud of this final project */}

                    <div style={{divStyle}}>
                        <HPVideo />
                    </div>

                    <p style={{ textAlign: 'center', marginTop: "25px" }}><Link to="/login">Login</Link> to view your dashboard</p>

                </Container>
            </div>

        )
    }
}


