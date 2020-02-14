import React, { Component } from 'react'
import Todoitem from './Todoitem.js'
import PropTypes from 'prop-types'


class Todos extends Component {

   
    
  render() {
    return this.props.todos.map((todo) => (
          <Todoitem key={todo.Id} todo ={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />  
      ))
       
    
  }
}
//proptypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired

}
export default Todos;
