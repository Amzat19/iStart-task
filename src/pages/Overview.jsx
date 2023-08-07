import { ReactComponent as DefaultFlag } from '../assets/default-flag.svg';
import { ReactComponent as MediumFlag } from '../assets/medium-flag.svg';
import { ReactComponent as HighFlag } from '../assets/high-flag.svg';
import { ReactComponent as UrgentFlag } from '../assets/urgent-flag.svg';
import { ReactComponent as Edit } from '../assets/edit.svg';
import { ReactComponent as Trash } from '../assets/trash.svg';
import { ReactComponent as DotMenu } from '../assets/dot-menu.svg';
import { ReactComponent as RowVertical } from '../assets/row-vertical.svg';
import { ReactComponent as Board } from '../assets/board.svg';
import { ReactComponent as DefaultTickCircle } from '../assets/default-tick-circle.svg';
import { ReactComponent as MediumTickCircle } from '../assets/medium-tick-circle.svg';
import { ReactComponent as HighTickCircle } from '../assets/high-tick-circle.svg';
import { ReactComponent as UrgentTickCircle } from '../assets/urgent-tick-circle.svg';
import { ReactComponent as Add } from '../assets/add.svg';
import { ReactComponent as Calendar } from '../assets/calendar.svg';
import { ReactComponent as Close } from '../assets/close-logo.svg';
import { useState } from 'react';

const Overview = () => {
  const today = new Date();
  const [isNewTaskActive, setIsNewTaskActive] = useState(false);
  const [editingMode, setEditingMode] = useState(false);
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);
  const [tasks, setTasks] = useState([
    {
      taskName: 'Task Name',
      description: 'Description',
      date: 'Aug 8',
      status: 'Urgent'
    }
  ]);

  const [newTask, setNewTask] = useState({
    taskName: '',
    description: '',
    date: '',
    status: ''
  });

  const addTask = () => {
    if (!newTask.taskName || !newTask.description || !newTask.date || !newTask.status) {
      return;
    }

    if (editingMode) {
      // Handle editing existing task
      const updatedTasks = tasks.map((task, index) =>
        index === editingTaskIndex ? newTask : task
      );
      setTasks(updatedTasks);
    } else {
      // Handle creating new task
      setTasks([
        ...tasks,
        newTask
      ]);
    }


    setNewTask({
      taskName: '',
      description: '',
      date: '',
      status: ''
    });

    setEditingMode(false);
    toggleNewTask();
  }

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };


  const handleEditTask = (index) => {
    const selectedTask = tasks[index];
    setNewTask(selectedTask);
    setEditingMode(true);
    setEditingTaskIndex(index);
    toggleNewTask();
  };

  const editNewTask = (e) => {
    const { name, value } = e.target;
    setNewTask({
      ...newTask,
      [name]: value
    })
  };

  const toggleNewTask = () => {
    setIsNewTaskActive(!isNewTaskActive);
  }

  return (
    <section>
      <h1>Overview</h1>
      <div className='dateAndBoard'>
        <p>{today.toDateString()}</p>
        <div className='board'>
          <span className='span-active'>
            <RowVertical />
            List
          </span>
          <span>
            <Board />
            Board
          </span>
        </div>
      </div>
      <div className='to-do'>
        <h2>To-do</h2>
        {
          tasks.map((task, index) => {
            return (
              <article className={`todo-item ${task.status === 'Urgent' ? 'urgent' : task.status === 'High' ? 'high' : task.status === 'Medium' ? 'medium' : task.status === 'Low' ? 'low' : null}`} key={index}>
                {task.status === 'Urgent' ? <UrgentTickCircle className='tick' /> : task.status === 'Medium' ? <MediumTickCircle /> : task.status === 'High' ? <HighTickCircle /> : task.status === 'Low' ? <DefaultTickCircle /> : null}
                <div className='todo-details'>
                  <span className='name'>{task.taskName}</span>
                  <span className='desc'>{task.description}</span>
                  <div className='calendarAndUrgent'>
                    <span className='calendar'>
                      <Calendar />
                      {task.date}
                    </span>
                    <span className='urgent'>
                      {task.status === 'Urgent' ? <UrgentFlag /> : task.status === 'High' ? <HighFlag /> : task.status === 'Medium' ? <MediumFlag /> : task.status === 'Low' ? <DefaultFlag /> : null}
                      {task.status}
                    </span>
                  </div>
                </div>
                <div className='editandDelete'>
                  <span>
                    <Edit onClick={() => handleEditTask(index)} />
                    <Trash onClick={() => handleDeleteTask(index)} />
                    <DotMenu />
                  </span>
                </div>
              </article>
            )
          })
        }
        <button onClick={() => toggleNewTask()}>
          <Add />
          Add New Task
        </button>
      </div>
      <article className={isNewTaskActive ? 'addNewTask' : 'hideNewTask'}>
        <div className='head'>
          <span>New Task</span>
          <Close onClick={() => toggleNewTask()} />
        </div>
        <div className='nameAndDesc'>
          <input type='text' name='taskName' value={newTask.taskName} onChange={editNewTask} placeholder='Task Name' />
          <textarea name='description' value={newTask.description} onChange={editNewTask} placeholder='Description' />
        </div>
        <div className='dateAndStatus'>
          <input type='text' name='date' value={newTask.date} onChange={editNewTask} placeholder='Add due date' />
          <select name="status" value={newTask.status} onChange={editNewTask}>
            <option hidden>Set priority</option>
            <option value='Urgent'>
              Urgent
            </option>
            <option value='High'>
              High
            </option>
            <option value='Medium'>
              Medium
            </option>
            <option value='Low'>
              Low
            </option>
          </select>
        </div>
        <button type='button' onClick={() => addTask()}>Create task</button>
      </article>
    </section>
  )
}

export default Overview;