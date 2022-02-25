import React from 'react'
import '../Template/Template.css';


function Template( { children } ) {
    return (
        <div className='Template'>
            <h2 className='Title'> 오늘 뭐입지? </h2>
            <div>{ children }</div>
        </div>
    )
}

export default Template
