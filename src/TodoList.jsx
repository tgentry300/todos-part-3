import React, { Component } from 'react';
import TodoItem from './TodoItem'
import { Link } from "react-router-dom";


class TodoList extends Component {


    render() { 
      return ( 
        <div className='todoapp'>
          <header className='header'>
            <h1>todos</h1>
            <input className='new-todo' placeholder='What needs to be done'  onKeyDown={this.props.handleKeyPress} autoFocus/>
          </header>
          <section className='main'>
            <ul className='todo-list'>
              {this.props.todos.map(todo => <TodoItem 
              text={todo.title} 
              key={todo.id} 
              handleCheck={this.props.handleCheckClick(todo.id)} 
              handleDestroyOnButtonClick={this.props.handleDestroyOnButtonClick(todo.id)} 
              completed={todo.completed} />)}
            </ul>
          </section>
          <footer className='footer'>
            <span className='todo-count'><strong>{this.props.todos.length}</strong></span>
            <ul className="filters">
              <li>
                <Link to="/">
                All
                </Link>
              </li>
              <li>
                <Link to="/active">
                Active
                </Link>
              </li>
              <li>
                <Link to="/completed">
                Completed
                </Link>
                
              </li>
            </ul>
            <button className='clear-completed' onClick={this.props.handleClearCompleted}>Clear Completed Tasks</button>
          </footer>
        </div>
       );
    }
  }

  export default TodoList;