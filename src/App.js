import './App.css';
import React, { useState } from 'react';
import Todo from './Todo';



function App() {
  const[input,setinput]=useState( )
  const [item,setitems]=useState([])

  const itemevent=(event)=>{
    let newval= event.target.value

    setinput(newval)

  }
  const itemlist=()=>{
    setitems((olditems)=>{
      return [...olditems,input]
    });
    setinput("")
  }

  
  const deleteItems=(id)=>{
    setitems((olditems)=>{
      return olditems.filter((arrElem,index)=>{
        return index!==id
      })
    })

  }
  
  return (
   <>
   <div className='main_div'>
    <div className='center-div'>
      <br />
      <h1>ToDo List</h1>
      <br />
      <input type="text" placeholder='Add item' onChange={itemevent} value={input}  />
      <button onClick={itemlist} >+</button>
      <ol>{item.map((itemval,index)=>{
        return <Todo key={index}
            id={index}
            text={itemval}
            onSelect={deleteItems}
            
            
            
            />
      })}</ol>
    </div>
   </div>

   </>
  );
}

export default App;
