import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header.js'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo.js';
import About from './components/pages/About';


//import uuid from 'uuid';
import axios from 'axios';


class App extends React.Component {
state = {
  todos: []
}

componentDidMount() {
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res => this.setState({todos: res.data}))
}
// Toggle Complete
markComplete = (Id) =>{
  this.setState({ todos: this.state.todos.map(todo => {
    if(todo.Id ===Id) {
      todo.completed = !todo.completed
    }
    return todo;
  }) })
}

delTodo = (Id) => {
  axios.delete(`https://jsonplaceholder.typicode.com/todos/${Id}`)
  .then(res => this.setState({todos: [...this.state.todos.filter(todo => todo.Id !== Id)]}))


}

addTodo = (title) => {
 axios.post('https://jsonplaceholder.typicode.com/todos', { title,  completed: false}).then(res => this.setState({ todos: [...this.state.todos, res.data]}))
 
}
  render() {
    console.log(this.state.todos)
    return (
      <Router>
        <div className="App">
          <div className="container"
          ><Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo} />
               <Todos todos= {this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
            </React.Fragment>
          )}/>
          <Route path="/about" component={About}>


          </Route>
          
          </div>
          
         </div>
     </Router>
    );
  }
}

export default App;
