import React, { Component } from "react";
import Todos from "./Components/Todos";

import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: 1, 
        title: 'Email recruiter',
        completed: false
      },
      {
        id: 2, 
        title: 'Message Chris',
        completed: false
      },
      {
        id: 3, 
        title: 'Make flashcards',
        completed: false
      }
    ]
  }
  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
        <Todos />
      </div>
    );
  }
}

export default App;
