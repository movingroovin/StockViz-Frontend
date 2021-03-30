import React, { Component } from 'react'

class AddStock extends Component {
  state = {
    name: "",
    code: "",
    price: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.addStock(this.state);
    this.setState({
      name: "",
      code: "",
      price: ""
    })
  }

  render() {
    return(
      <div>
        <form>
          <label htmlFor="name">name</label>
          <input type="text" id="name" onChange={this.handleChange} value={this.state.name}/>
          <label htmlFor="code">code</label>
          <input type="text" id="code" onChange={this.handleChange} value={this.state.code}/>
          <label htmlFor="price">price</label>
          <input type="text" id="price" onChange={this.handleChange} value={this.state.price}/>
          <button onClick={this.handleSubmit} className="waves-effect waves-light btn-small blue lighten-2">Add Stock</button>
        </form>
      </div>
    )
  }
}

export default AddStock