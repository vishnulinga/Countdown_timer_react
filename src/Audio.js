import React from "react"
class Audio extends React.Component{
    render(){
        return(
            <div>
            <audio autoPlay>
                <source src={"http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3"} type={"audio/mpeg"}></source>
            </audio>
            </div>

        )
    }

}
export default Audio