import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/layout/Header";
import Todos from "./Components/Todos";
import AddTodo from "./Components/AddTodo";
import About from "./Components/pages/About";
// import uuid from "uuid";
import Axios from "axios";

import "./App.css";

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    Axios.get("http://jsonplaceholder.typicode.com/todos?_limit=10").then(res =>
      this.setState({ todos: res.data })
    );
  }

  // Toggle complete
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  delTodo = id => {
    Axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
      this.setState({
        // the spread operator [...] is used to add an element to an existing array (The spread operator can be used to take an existing array and add another element to it while still preserving the original array)
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      })
    );
  };

  // Add Todo
  addTodo = title => {
    Axios.post("http://jsonplaceholder.typicode.com/todos", {
      // in es6 below is equal to title: title
      title,
      completed: false
    }).then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  };

  render() {
    console.log(this.state.todos);
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
