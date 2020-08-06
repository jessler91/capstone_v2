import React, { Component } from 'react'
import hpscroll from "./hp-scroll.mp4"
import '../App.css'


// const vidStyle = {
//     width: "100%",
//     margin: "0 auto",
// }

export default class HPVideo extends Component {
    render() {


        return (
            <div>
                <video source src={hpscroll} width="720" height="340" type="video/mp4" className="vid" controls center autoPlay muted loop></video>
            </div>
        )
    }
}











