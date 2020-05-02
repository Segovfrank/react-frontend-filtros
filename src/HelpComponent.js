import React from 'react';


const HelpComponent = (props) => {

    const handleClick = (event) => {
        
    }


    return(
        <div className="space-box">
           
           <span >{props.title}</span> {props.helper ? <span className="helper-box" onClick={handleClick}>?</span> : null}


        </div>
    )
}

export default HelpComponent;