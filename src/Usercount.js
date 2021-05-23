import react, { useEffect } from 'react'

function Usercount(props){
    useEffect(()=>{
        alert("count" +props.count)
    },[props.count])

    return(
        <div>
            <h1>Count is:{props.count}</h1>
            <h1>data is:{props.data}</h1>
        </div>
    )
}

export default Usercount