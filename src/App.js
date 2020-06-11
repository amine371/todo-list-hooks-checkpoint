  
import React,{useState} from 'react';
import './App.css';

function App() {
  const [tasks,setTasks]= useState(['amine','khadraoui','designer','ai']);

  const handleDelete=(index)=>{
    const newArr =[...tasks];
    newArr.splice(index,1);
    setTasks(newArr);
  }
const handleEdit = (index,value)=>{
  const newArr = [...tasks];
  newArr[index]=value;
  setTasks(newArr);
}
const handleSubmit =(e)=>{
  e.preventDefault();
  let newtask =e.target.newtask.value;
  const newArr =[...tasks];
  newArr .push(newtask);
  setTasks(newArr);
}
const Header = (props) => {
  return(
    <h2>
    amine <strong  className='blink'>{props.numTodos}</strong> Todos
   </h2>
  )
}
const numTodos =(props)=>{

  return(
    <div className='listItem'>
      <input type="text" name="task" defaultValue={props.content} onBlur={event => handleEdit(props.id ,event.target.value)}/>
      <button className ="delete" onClick ={()=>handleDelete(props.id)}>....</button>
    </div>
  );
}
const TodoList = (props)=>{
  const Todos =props.taks.map((todo,index)=>{
    return <Todo content={todo} key={index}/>
  })
  return(
    <div className ='listWrapper'>
      {todo}
      </div>
  );
}
const SubmitForm =() => {
  return(
    <from onSubmit ={event=> handleSubmit(event)}>
      <input type ="text" name ="newTask" defaultValue="" placeholder="add new task " required/>
      <button className='button'>++</button>
    </from>
  );
}
return(
  <div className="ToDoContainer">
    <Header numTodos={tasks.length}/>
    <TodoList tasks={tasks}/>
    <submitForm/>
    </div>
    );
    }
export default App;
