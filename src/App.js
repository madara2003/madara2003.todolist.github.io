import React, {useState, } from 'react';
import './App.css';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './Todo.js';


function App() {
  const [todos, setTodos] = useState(['go for a walk', '10km ranning']);
  const [input, setInput] = useState('');

 

  const addTodo = (event) => {
   setTodos([...todos, input]);
   event.preventDefault();
   setInput('')
  }
 

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form>
          <FormControl>
            <InputLabel>Write a Todo</InputLabel>
            <Input type="text" value={input} onChange={event=>setInput(event.target.value)}/>  
         </FormControl>

        <Button  disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
            AddTodo
        </Button>
      </form>
     
     
     <ul>
     {
       todos.map((todo) => {
         return <Todo key={Math.random()} context={todo} /> 
       })
     }
       
     </ul>

    </div>
  );
}


export default App;