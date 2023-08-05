import React, { useState } from 'react'

const ChatApp = () => {

const [chats, setChats] = useState([]);

const fn = (f) => {
  if(f.value === 'Enter'){
    console.log(f.target.value);
    setChats([...chats , {text: f.target.value , completed : false}])
    console.log(chats)
  }
}
  return (
    <div className='conatiner'>
<p className='display-4 fw-bold text-center'>Chat App</p>
<hr />
      <div className="card mt-5">
        <div className="card-header"></div>
     <input className='form-control' onKeyDown={ fn } placeholder='add something' />


        <div className="card-body">

          <ul className="list-group">
            {
             chats.map((obj , index) => {
              return <li className='list-group-item'>
                <h3>{obj.text}</h3>
                <button className='btn btn-info' ></button>
              </li>
             })
            }
            
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ChatApp