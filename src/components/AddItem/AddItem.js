import React, { Component } from "react";
import "./AddItem.css";

class AddItem extends Component {
  state = {
      name : '',
      age : ''
  }
  handleChange = (e) => {
      this.setState({
          [e.target.id] : e.target.value
      })
  };

  handleSubmit = (e) => {
      e.preventDefault();
      if (e.target.name.value ==''){
          return false
      } else {
        this.props.addItem(this.state)
        this.setState({    //to make input clear
            name: '',
            age : ''
        })
      }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter your Name"
            id="name"
            onChange={this.handleChange}
            value={this.state.name}  //to make input clear
          />
          <input
            type="number"
            placeholder="Enter your Age"
            id="age"
            onChange={this.handleChange}
            value={this.state.age} //to make input clear
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default AddItem;
