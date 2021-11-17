import React, {Component} from "react";
import TodoItems from "./components/TodoItems/TodoItems";
import AddItem from "./components/AddItem/AddItem";

class App extends Component {
  state = {
    items : [
      {id:1, name:'mohamed', age:'20'},
      {id:2, name:'ali', age:'21'},
      {id:3, name:'omr', age:'22'}
    ]
  }

  deleteItem = (id) => {
    // let items = this.state.items;
    // let index = items.findIndex(item =>item.id ===id);
    // items.splice(index, 1);
    // this.setState({items})
    ////anather aproch//
    let items = this.state.items.filter(item => {
      return item.id !==id
    })
    this.setState({items})
  };

  addItem = (item) => {
    item.id = Math.random()
    let items = this.state.items;
    items.push(item)
    this.setState({items})
  }

  render() {
    return (
      <div className="App container">
        <h1 className="text-center" >Todo List </h1>
        <TodoItems items={this.state.items} deleteItem={this.deleteItem} />
        <AddItem addItem ={this.addItem} />
      </div>
    );
  }
};

export default App;
