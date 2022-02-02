import React, { useState } from 'react';
import './TaskField.scss';

const TaskField = () => {
  const [task, setTask] = useState('');
  return (
    <div>
      <label htmlFor='task'> Task </label>
      <input
        type='text'
        id='task'
        value={task}
        onChange={
          (e) => setTask(e.target.value)} />
      <button>
        Add Task
      </button>
    </div>
  );
}

export default TaskField;