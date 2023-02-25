import React from 'react';

const Todo=(props)=>{
    return (<>
    <div className='todo_style'>
    <i className="fa-solid fa-trash" aria-hidden="true "style={{color:"black"}}
        onClick={()=>{
            props.onSelect(props.id)
        }}
        >
    </i>
    <li>{props.text}</li>
    </div>
    
    </>)
}

export default Todo