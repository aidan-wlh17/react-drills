import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      food: ['spaghetti', 'hot dog', 'burger', 'apple']
    }
  }
  render(){
    let foodsToDisplay = this.state.food.map((element, index) => {
    return <h2 key={index}>{element}</h2>
      })
    
  return <div className="App">{foodsToDisplay}</div>
  }
}

export default App;
