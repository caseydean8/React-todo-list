import React, { Component } from "react";
import Header from "./Components/layout/Header";
import Todos from "./Components/Todos";
import AddTodo from "./Components/AddTodo";

import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Email recruiter",
        completed: false
      },
      {
        id: 2,
        title: "Message Chris",
        completed: false
      },
      {
        id: 3,
        title: "Make flashcards",
        completed: true
      }
    ]
  };

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
    this.setState({
      // the spread operator [...] is used to add an element to an existing array (The spread operator can be used to take an existing array and add another element to it while still preserving the original array)
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: 4,
      // in es6 below is equal to title: title
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
