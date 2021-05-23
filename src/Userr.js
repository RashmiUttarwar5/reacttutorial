import react, { Component } from 'react'

class Userr extends Component{
    constructor(){
        super();
        this.state={
            email: "abc@gmail.com"
        }
    }
    render(){
        console.log("render method",this.state.email)
        return(
            <div>
                <h1>User component</h1>
                <button onClick={()=>this.setState({email:"xyz@gmail.com"})}>update mail</button>
            </div>
        )
    }
}

export default Userr