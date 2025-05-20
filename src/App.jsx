import { useEffect, useRef, useState } from 'react'
import './App.css'
import Header from './components/header.jsx';
import ShowTask from './components/showTask.jsx';
import AddTask from './components/addTask.jsx';

function App() {

  const getTaskList=()=>{
    const storedTasks = localStorage.getItem('taskList');
    return storedTasks ? JSON.parse(storedTasks) : [];
  }


  const [taskList,setTaskList]=useState(getTaskList());
  const [beingEdited,setBeingEdited]=useState({editing:false,itemBeingEdited:null})
  const taskRef=useRef(null);
  useEffect(()=>{
    localStorage.setItem('taskList',JSON.stringify(taskList));
  },[taskList])

  console.log(taskList);
  return (
    <div className='App'>
      <Header />
      <AddTask taskList={taskList} taskRef={taskRef} setTaskList={setTaskList} beingEdited={beingEdited} setBeingEdited={setBeingEdited}/>
      <ShowTask taskList={taskList} setTaskList={setTaskList} taskRef={taskRef} beingEdited={beingEdited} setBeingEdited={setBeingEdited}/>
    </div>
  )
}

export default App
