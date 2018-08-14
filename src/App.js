import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList'
import todoList from './todos.json'

import { Route, Switch } from "react-router-dom";


class App extends Component {
  state = { 
    todos: todoList,
   }

 
  handleCheckClick = (id) => () =>{
      const newTodoList = this.state.todos.slice()
      newTodoList.forEach((todo, index)=> {
          if(todo.id === id){
              todo.completed = !todo.completed
              console.log(todo)
            
          }
      })

      this.setState({todos: newTodoList})
  }
    

  handleDestroyOnButtonClick = (id) => () => {
      const newTodoList = this.state.todos.slice()
      newTodoList.forEach((todo, index)=> {
          if(todo.id === id){
              newTodoList.splice(index, 1)
          }
      
      })
      this.setState({todos: newTodoList})
      
  }



  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      todoList.push({
        userId: 1,
        id: todoList.length + 1,
        title: event.target.value,
        completed: false

      })
  
        console.log(todoList)
      }
      this.setState({todos: todoList})
  }
  
  handleClearCompleted =  ()=> {
      const newTodoList = this.state.todos.filter(todo => !todo.completed)
      this.setState({todos: newTodoList})
  }

  render() {
    const commonProps = {
      handleCheckClick: this.handleCheckClick,
      handleDestroyOnButtonClick: this.handleDestroyOnButtonClick,
      handleKeyPress: this.handleKeyPress,
      handleClearCompleted: this.handleClearCompleted,
    }
    return (
        <Switch>
          <Route exact path='/' render={() => <TodoList {...commonProps} todos={this.state.todos}/> }/>
          <Route exact path='/active' render={()=> <TodoList {...commonProps} todos={this.state.todos.filter(todo=> !todo.completed)}/>}/>
          <Route exact path='/completed' render={()=> <TodoList {...commonProps} todos={this.state.todos.filter(todo=> todo.completed)}/>} />
        </Switch>
    );
  }
}

export default App;
