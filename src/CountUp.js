import React from 'react'


    const Plus = (props) => {
        const {countUp} = props
 
    
    
        return (
            <div>
                <button onClick={ countUp}>+</button>
            </div>
        )
    
   }
export default Plus