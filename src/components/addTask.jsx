import React from 'react'

function addTask(props) {

  const { taskList, setTaskList, taskRef, beingEdited, setBeingEdited} = props;

  const handleReset = () => {
    taskRef.current.value = null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskRef.current.value != '') {

      const now = new Date();

      const formatted = new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }).format(now);
      const task = {
        id: Math.floor(Math.random() * 1000),
        taskName: taskRef.current.value,
        createdTime: formatted
      }
      if (beingEdited.editing===true){
        let updatedTaskList=taskList.map((item)=>(
          item.id===beingEdited.itemBeingEdited?{id:item.id,taskName:taskRef.current.value,createdTime:formatted}:item
        ))
        setTaskList(updatedTaskList)
        setBeingEdited({editing:false,itemBeingEdited:null})
      }
      else{
      setTaskList([...taskList, task])
      }

    }
    handleReset();
  }
  return (
    <div className='addTask'>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='add task' autoComplete='off' ref={taskRef} />
        <button type='submit'>{beingEdited.editing?'Update':'Add'}</button>
      </form>
    </div>
  )
}

export default addTask