import React, { Component } from 'react';
import todoList from './todos.json'
import TodoItem from './TodoItem'

class TodoList extends Component {
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
      return ( 
        <div className='todoapp'>
          <header className='header'>
            <h1>todos</h1>
            <input className='new-todo' placeholder='What needs to be done'  onKeyDown={this.handleKeyPress} autoFocus/>
          </header>
          <section className='main'>
            <ul className='todo-list'>
              {this.state.todos.map(todo => <TodoItem 
              text={todo.title} 
              key={todo.id} 
              handleCheck={this.handleCheckClick(todo.id)} 
              handleDestroyOnButtonClick={this.handleDestroyOnButtonClick(todo.id)} 
              completed={todo.completed} />)}
            </ul>
          </section>
          <footer className='footer'>
            <span className='todo-count'><strong>{this.state.todos.length}</strong></span>
            <button className='clear-completed' onClick={this.handleClearCompleted}>Clear Completed Tasks</button>
          </footer>
        </div>
       );
    }
  }

  export default TodoList;