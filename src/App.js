 import React, {useState} from 'react';
import './App.css';

function App() {

  const [tasks,setTasks] = useState(['amine', 'khadraoui', 'web designerrrrr', 'bac info']);

  const handleDelete = (index) => {
    const newArr = [...tasks];
    newArr.splice(index, 1);
    setTasks(newArr);
  }

  const handleEdit = (index, value) => {
    const newArr = [...tasks];
    newArr[index] = value;
    setTasks(newArr);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTask =e.target.newTask.value;
    const newArr = [...tasks];
    newArr.push(newTask);
    setTasks(newArr);
  }

  const Header = (props) => {
    return(
      
        <h1>
          You have <strong className='blink'>{props.numTodos}</strong> Todos
        </h1>  
    )
  }
  const Todo = (props) => {
    return(
      <div className='listItem'>
        <input type="text" name="task" defaultValue={props.content} onBlur={event => handleEdit(props.id, event.target.value)}/>
        <button className="delete" onClick = {() => handleDelete(props.id)} >X</button>
      </div>
    );
  }
  const TodoList = (props) => {
    const todos = props.tasks.map((todo, index) => {
      return <Todo content={todo} key={index} id={index} />
    })
    return( 
      <div className='listWrapper'>
        {todos}
      </div>
    );
  }
  const SubmitForm =() => {
   
      return(
        <form onSubmit = {event => handleSubmit(event)}>
           <input type="text" name="newTask" id="newTask" defaultValue="" placeholder="Add new task" required/>
          <button className='button'>+</button>
        </form>
      );  
}
  return (
        <div className="ToDoContainer">
    <Header numTodos={tasks.length} />
    <TodoList tasks={tasks} />
    <SubmitForm />
    </div>   
  );
}
export default App;
