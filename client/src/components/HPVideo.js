import React, { Component } from 'react'
import hpscroll from "./hp-scroll.mp4"

export default class HPVideo extends Component {
    render() {


        return (
            <div>
                    {/* <video name="media" width="320" height="240"> <source src={hpscroll} type="video/mp4" /> </video> */}
                    <video source src={hpscroll} width="720" height="340" type="video/mp4" controls autoPlay muted loop></video>
                    {/* <video src="../../public/videos/hp-scroll.mp4" width="320" height="240" type="video/mp4" controls></video> */}
                    {/* <embed src="../public/videos/hp-scroll.mp4" autostart="false" height="400" width="744" /> */}
                    {/* <a href="../public/videos/hp-scroll.mp4" title="Download movie">film name</a></video> */}
                    {/* <video width="320" height="240" controls src="homepage-scroll" type="video/mp4"> */}
            </div>
        )
    }
}







// autoplay muted loop 








