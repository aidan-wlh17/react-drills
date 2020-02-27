import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ToDo from './ToDo'

class App extends Component {
  constructor() {
    super()

    this.state = {
      input: '',
      list: []
    }
    this.handleAddTask = this.handleAddTask.bind(this)
  }

  handleInputChange(val) {
    this.setState({input: val})
  }

  handleAddTask() {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ''
    })
  }

  render() {
    let list = this.state.list.map((element, index) => {
      return <ToDo key={index} task={element}/>
    })
    return (
      <div className="App">
        <h1>To Do List:</h1>
      <div>
        <input value={this.state.input} onChange={e => this.handleInputChange(e.target.value)}/>
        <button onClick={this.handleAddTask}>Add</button>
      </div>
      <br/>

      {list}
      </div>

    );
  }
}

export default App;
