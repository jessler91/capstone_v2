import React, { Component } from 'react'

export default class HPVideo extends Component {
    render() {
        return (
            <div>
             {/* <video src="../videos/hp-scroll.mp4" width="320" height="240" type="video/mp4" controls> */}
             
                    <video src="../assets/hp-scroll.mp4" autostart="false" height="400" width="744" />
                    {/* <a href="../assets/hp-scroll.mp4" title="Download movie">film name</a>
                    {/* // Insert Video Here */}


                    {/* <video width="320" height="240" controlssrc="homepage-scroll" type="video/mp4">
                        <source src="homepage-scroll" type="video/mp4">
                    </video> */}
            </div>
        )
    }
}
