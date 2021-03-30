import React, { Component } from 'react';

// Custom Component
import Stocks from './../Stocks';
import AddStock from './../AddStock';

class BuySell extends Component {
  state = {
    stocks: [
      {id: 1, name: 'E.Sun', code: '2884', price: 27.00},
      {id: 2, name: 'Sunon', code: '2421', price: 60.0}
    ]
  }
  deleteStock = (id) => {
    const stocks = this.state.stocks.filter(stock => {
      return stock.id !== id
    });
    this.setState({
      stocks
    });
  }
  addStock = (stock) => {
    stock.id = this.state.stocks.length + 1;
    let stocks = [...this.state.stocks, stock];
    this.setState({
      stocks
    })
  }
  render(){
    return (
      <div className="stock-app container">
        <h1 className="center grey-text lighten-3">Stock Note</h1>
        <Stocks stocks={this.state.stocks} deleteStock={this.deleteStock}/>
        <AddStock addStock={this.addStock}/>
      </div>
    );
  }
}

export default BuySell;
