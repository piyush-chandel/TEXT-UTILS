import React from 'react'

export default function Alert(props) {
  const capitalise=(word)=>{
    let lower=word.slice(1).toLowerCase();
    return word[0].toUpperCase()+lower;
  }
    return (
    <div style={{height: "64px"}}>
      {props.alert && (<div className={`alert alert-${props.type}
   bg-primary alert-dismissible fade show`} role="alert">

    
     <strong>{capitalise(props.alert.type)}</strong> &nbsp;{props.alert.msg}
    {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
    
  </div>)}
  </div>
  )
}
