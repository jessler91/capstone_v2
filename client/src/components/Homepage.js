import React, { Component } from 'react'
import { Container, Divider } from '@material-ui/core'
import HPVideo from "./HPVideo.js"

// This is the Homepage of my App
// This page shouldnt have state

export default class Homepage extends Component {
    render() {
        return (

            <div className="App-Homepage">

                <Container maxWidth="sm">
                    
                    <br></br>
                    <br></br>

                    <h1 style={{ textAlign: 'center' }}>Justins FBA Planning Shipment App</h1>
                    <p style={{ textAlign: 'center' }}>Are you a seller tired of endlessly scrolling in excel to manage Amazon FBA Inventory?</p>

                    <Divider />

                    <HPVideo />



                </Container>
            </div>

        )
    }
}


