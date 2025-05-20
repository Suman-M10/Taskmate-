import React from 'react'
import { useState } from 'react'

function ShowTask(props) {
  const {taskList,setTaskList,taskRef,setBeingEdited}=props;

  const editTask=(item)=>{
    setBeingEdited({editing:true,itemBeingEdited:item.id})
    taskRef.current.value=item.taskName;
  }

  const deleteTask=(id)=>{
    let copyOfTaskList=[...taskList];
    let updatedTaskList= copyOfTaskList.filter((item)=>(id!=item.id))
    setTaskList(updatedTaskList)
    console.log(taskList);
  }
  return (
    <div className='showTask'>
      <div className="head">
        <div className="left">
          <span className='title'>Todo</span>
          <span className='count'>{taskList.length}</span>
        </div>
        <div className='right'>
          <button className='clearAll' onClick={()=>setTaskList([])}>Clear All</button>
        </div>
      </div>
      <ul>
        {taskList.map((item) => (
          <li key={item.id}>
            <p>
            <span className='name'>{item.taskName}</span>
            <span className='time'>{item.createdTime}</span>
            </p>
            <i className='bi-pencil-square' onClick={()=>editTask(item)}></i>
            <i className='bi-trash' onClick={()=>deleteTask(item.id)}></i>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ShowTask