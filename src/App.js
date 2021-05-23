import react, { useEffect, useState } from 'react'
import Usercount from './Usercount';
import './abc.css'
import style from './custom.module.css'
 function App(){
  return(
    <div>
      <h1 className="abc">hiiii</h1>
      <h1 style={{color:"red", backgroundColor:"black"}} >hii</h1>
      <h1 className={style.success} >hii</h1>
      <button type="button" className="btn btn-primary">Primary</button>
      <div className="btn-group">
  <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Action
  </button>
  <div className="dropdown-menu">
    <a className="dropdown-item" href="#">Action</a>
    <a className="dropdown-item" href="#">Another action</a>
    <a className="dropdown-item" href="#">Something else here</a>
    <div className="dropdown-divider"></div>
    <a className="dropdown-item" href="#">Separated link</a>
  </div>
</div>
    </div>
  )
 }

export default App;