import React, { useState } from 'react'

const ChatApp = () => {
  const [chat, setChat] = useState([])

  const task = (t) =>
  {
if(t.code === 'Enter'){
  console.log(t.target.value)
  setChat([...chat , {text:t.target.value , completed:false}]);
console.log(chat)
}
  }

  const deletechat =(index) =>{
    console.log(index)
    const temp = chat;
    temp.splice(index,1)
    setChat([...temp])
  }

const completechat =(index) => {
  const temp = chat;
  temp[index].completed = true;
  setChat([...temp]);
}


  return (
    <div>
      <div className="conatiner">
        <p className="text-center display-4">Chat App</p>
        <hr />

        <div className="card">
          

          <div className="card-body">
            <ul className="list-group">
              {
                chat.map((obj , index) => {
                  return <li className="list-group-item">
                    {obj.completed ? <span className='badge text-bg-warning'>completed</span> : <span className='badge text-bg-danger'>pending</span> }
                    <h3 style={{textDecoration: obj.completed ? 'line-through' : null}}>{obj.text}</h3>
                    <button onClick={ () => {deletechat(index)}} className='btn btn-info'>Delete</button>
                    <button onClick={() => {completechat(index)}} className='btn btn-success ms-2'>completed</button>
                    
                  </li>
                })
              }
            </ul>
          </div>
          <div className="card-footer">
            <input className='form-control' placeholder='chat' onKeyDown={ task } />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatApp