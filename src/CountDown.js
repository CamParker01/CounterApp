import React from 'react'


    const Minus = (props) => {
        const {countDown} = props
 
    
    
        return (
            <div>
                <button onClick={countDown}>-</button>
            </div>
        )
    
   }
export default Minus