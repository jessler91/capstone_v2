
import React, { Component } from 'react'
import { Container, Divider} from '@material-ui/core'

class About extends Component {
    
    state = {
        checked: true,
        heading: 'About planningMaster.com'
    }

    render() {
        return (
            <div className="text-gray">
                <Container maxWidth="sm">
                    <h1 style={{ textAlign: 'center' }}>{this.state.heading}</h1>
                        <p>Im Justin, thank you for checking out my planning software.</p>
                        <Divider />
                        <p>My final project goal is to create a dashboard of Amazon FBA inventory items. This application is not connected to the MWS API, but instead used manually entered data.  For each submitted inventory item, the application will display the current inventory and the forecasted inventory projections for the future 90 days.</p>
                </Container>
            </div>
        )
    }
}

export default About
