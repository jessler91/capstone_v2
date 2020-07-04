
import React, { Component } from 'react'
import { Container, Divider, Switch } from '@material-ui/core'

class About extends Component {
    state = {
        checked: true,
        heading: 'About planningMaster.com'
    }

    // toggleSwitch = () => {
    //     const newVal = !this.state.checked
    //     if (newVal) {
    //         return this.setState({
    //             heading: 'About SB.com',
    //             checked: newVal
    //         })
    //     }
    //     return this.setState({
    //         heading: 'About SB.com',
    //         checked: newVal
    //     })
    // }

    render() {
        return (
            <div className="text-gray">
                <Container maxWidth="sm">
                    <h1 style={{ textAlign: 'center' }}>{this.state.heading}</h1>
                        <p>Im Justin, thank you for checking out my planning software.</p>
                        <Divider />
                        <p>Get your code today!</p>
                </Container>
            </div>
        )
    }
}

export default About
