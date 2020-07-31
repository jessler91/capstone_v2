import React, { Component } from 'react'
import hpscroll from "./hp-scroll.mp4"


const vidStyle = {
    width: "100%",
    margin: "0 auto",
}

export default class HPVideo extends Component {
    render() {


        return (
            <div style={vidStyle}>
                    <video source src={hpscroll} width="720" height="340" type="video/mp4" controls center autoPlay muted loop></video>
            </div>
        )
    }
}











