import React from "react"
class Audio extends React.Component{
    render(){
        return(
            <div>
            <audio autoPlay>
                <source src={"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"} type={"audio/mpeg"}></source>
            </audio>
            </div>

        )
    }

}
export default Audio
