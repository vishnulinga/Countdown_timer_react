import React from "react"
import Audio from "./Audio"
class Timer extends React.Component {
    constructor(){
        super()
        this.state = {
            timer:10
        }
    }

    componentDidMount(){
        this.interval = setInterval(()=>{
            this.setState({timer:this.state.timer-1})
        },1000)
    }

    componentDidUpdate(){
      if(this.state.timer===0)  
      clearInterval(this.interval)
    }

    render(){
        if(this.state.timer!==0){
            return(
              <div style={{textAlign:"center"}}>
                <h1 style={{color:"red"}}>{this.state.timer}</h1>
                </div>
                )
        }else{
            return (
              <div style={{textAlign:"center"}}> 
              <h1 style={{color:"red"}}>Music!</h1>
                <Audio />
                </div>
            )
        }
        
    }
}

export default Timer