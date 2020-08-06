import React, { Component } from 'react'
import detailsimg from './details.png'
import '../App.css'

class SkuDetails extends Component {
    render() {
        return (
            <div>
                <h2>Additional SKU Details Page</h2>
                <img className="detailsimg" src={detailsimg} alt="Logo" />
            </div>
        )
    }
}

export default SkuDetails
