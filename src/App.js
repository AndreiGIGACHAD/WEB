import React, { useState } from 'react';
import './App.css';

const App = () => {
 // Хранение списка задач
  const [tasks, setTasks] = useState([]);
    // Хранение текста новой задачи

  const [taskText, setTaskText] = useState('');


  // Функция добавления новой задачи

  const addTask = () => {
    if (taskText.trim()) {
      setTasks([...tasks, { id: Date.now(), text: taskText, completed: false }]);
      setTaskText('');
    }
  };
  // Функция удаления задачи

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  // Функция переключения статуса выполнения задачи

  const toggleTask = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  // Функция редактирования задачи

  const editTask = (id) => {
    const newText = prompt('Измените название задачи:');
    if (newText) {
      setTasks(
        tasks.map(task =>
          task.id === id ? { ...task, text: newText } : task
        )
      );
    }
  };

  return (
    <div className="App">
      <h1>Чеклист</h1>
      <div>
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Напишите что-нибудь..."
        />
        <button onClick={addTask}>Добавить новую задачу</button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <div className="task-content">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              <span
                style={{
                  textDecoration: task.completed ? 'line-through' : 'none',
                }}
              >
                {task.text}
              </span>
            </div>
            <div className="task-actions">
              <button onClick={() => editTask(task.id)}>Редактировать</button>
              <button onClick={() => deleteTask(task.id)}>Удалить</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
