import React, { useState } from 'react'

const StateManagment = () => {
    let count = 1;
    /* useState */
    const [likes, setLikes] = useState(1)
  
  return (
    <div className='container'>
        <h1 className='text-center'>State Managment</h1>
        <hr />

        <button className='btn btn-primary mt-4' 
        onClick={ () => { 
            count++ ;
            console.log(count);
            }}>Add count</button>

            <h1>{count}</h1>

            <button className='btn btn-success mt-5' onClick={ () => {setLikes(likes + 1)}}>Update state</button>

            <h1>{likes}</h1>
    </div>
  )
}

export default StateManagment