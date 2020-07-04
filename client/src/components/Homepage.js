import React, { Component } from 'react'
import { Container, Divider, Switch } from '@material-ui/core'

// This is the Homepage of my App
// This page shouldnt have state

export default class Homepage extends Component {
    render() {
        return (

            <div className="App-Homepage">

                <Container maxWidth="sm">
                    <h1 style={{ textAlign: 'center' }}>Justins FBA Planning Shipment App</h1>
                    <p style={{ textAlign: 'center' }}>Are you a seller, tired of endlessly scrolling in excel to manage FBA Inventory?</p>

                    <Divider />
                    
                    <p style={{ textAlign: 'center' }}>
                    Check out this video....
                    </p>

                    <Divider />

                    <video src="../assets/homepage-scroll.mp4" autostart="false" height="300" width="644" />

                    {/* // Insert Video Here */}

                    {/* <video width="320" height="240" controlssrc="homepage-scroll" type="video/mp4">
                        <source src="homepage-scroll" type="video/mp4">
                    </video> */}

                </Container>
            </div>

        )
    }
}


