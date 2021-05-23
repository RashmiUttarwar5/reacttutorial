import react from 'react'

function Member(props){
    return(
        <div>
            <h1>Member component</h1>
            <button onClick={()=>props.data()}>Call Data</button>
        </div>
    )
}

export default Member