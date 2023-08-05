import React, { useState } from 'react'

const TodoList = () => {
    const [todoList, setTodoList] = useState([]);

    const addNewTask = (e) => {
       /*  console.log(e.code); */
       if (!e.target.value.trim()) return;
        if (e.code === 'Enter'){
            console.log(e.target.value)
            setTodoList([...todoList, {text : e.target.value , completed : false}]);
             
            e.target.value = " ";/* clear krne ke liye */
                                 
        console.log(todoList);
        }
    }
/* delete krna ho item agar */
    const deleteTodo = (index) => {
        console.log(index);
        const temp = todoList;
        temp.splice(index,1);
        setTodoList([...temp]);

    }

    const completeTodo = (index) =>
    {
        const temp = todoList;
        temp[index].completed = true;
        setTodoList([...temp]);
        
    }
  return (
    <div>
        <div className='container'>
            <p className='display-4 fw-bold text-center'>Todo List</p>
            <hr />

            <div className="card mt-5">
                <div className="card-header">
                    {/* keydown and keyup events */}
                    <input onKeyDown={ addNewTask } className='form-control' placeholder='Add task here' />
                </div>
                <div className="card-body" style={{}}>
                    <ul className='list-group'>
                    { todoList.map((obj, index) => { 
                        return <li className='list-group-item' Key={index} >
                        {obj.completed ? <span className='badge text-bg-success'>completed</span> : <span className='badge text-bg-info'>pending</span> }
                        <h3 style={{textDecoration: obj.completed ? 'line-through' : null }}>{obj.text}</h3>
                        <button onClick= { () => {deleteTodo(index)}} className='btn btn-primary'>delete</button>
                    <button onClick= { () => {completeTodo(index)}} className='btn btn-success ms-2'>complete task</button>
                    </li>
                })}
                    </ul>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default TodoList