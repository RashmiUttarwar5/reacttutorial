import react, { Component } from 'react'

class Student extends Component{

    componentWillUnmount(){
        console.log("componentWillUnmount is called")
    }

    render(){
        return(
            <div>
                <h1>Child component</h1>
            </div>
        )
    }
}

export default Student