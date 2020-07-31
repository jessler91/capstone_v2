
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
                        <p>My final project goal is to create a dashboard of Amazon FBA inventory items, I am hoping to use real data from a active selling account, but will use a demo account dataset if I am unable. For each submitted inventory item, the application will display the current inventory and the forecasted inventory projections for the future 90 days.</p>
                        <p>Welcome to Justins Capstone Server V2  -  My final project goal is to create a dashboard of Amazon FBA inventory items, I am hoping to use real data from a active selling account, but will use a demo account dataset if I am unable. For each submitted inventory item, the application will display the current inventory and the forecasted inventory projections for the future 90 days.</p>
                </Container>
            </div>
        )
    }
}

export default About
