import React, { Component } from 'react'
import axios from "axios";

class Stocks extends Component {
  state = {
    stock: null
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:5000/api/ParseChipData/GroupByBroker/').then(res => {
      this.setState({
        stock: res.data
      })
    })
  }

  render() {
    let maxIntradayProfit = { name: null, profit: 0 };
    const stockList = this.state.stock ? (
      this.state.stock.map((stock, index) => {
        const totalBuyMoney = stock.records.reduce((sum, current) => { return sum + current.買進股數 * current.價格 }, 0);
        const totalSellMoney = stock.records.reduce((sum, current) => { return sum + current.賣出股數 * current.價格 }, 0);
        const intradayProfit = stock.records.reduce((sum, current) => { return sum + (current.賣出股數 - current.買進股數) * current.價格 }, 0);
        if (intradayProfit >= maxIntradayProfit.profit) {
          maxIntradayProfit.name = stock.name
          maxIntradayProfit.profit = intradayProfit
        };
        return (
          <div className="collection-item col s12 m6 l3" key={ index }>
            <div><strong>券商: </strong>{ stock.name }</div>
            <div><strong>買進總金額: </strong>{ totalBuyMoney }</div>
            <div><strong>賣出總金額: </strong>{ totalSellMoney }</div>
            <div><strong>當日獲利總金額: </strong>{ intradayProfit }</div>
              {
                stock.records.map((record, key) => {
                  return (
                    <div key={ key }>
                      <li>
                        <strong>價格: </strong>{record.價格} |
                        <strong>買進股數: </strong>{record.買進股數} |
                        <strong>賣出股數: </strong>{record.賣出股數} |
                        <strong>買進 - 賣出: </strong>{record.買進股數 - record.賣出股數}
                      </li>
                    </div>
                  )
                })
              }
            <hr/>
          </div>
        )
      })
    ) : (
      <div className="center">Loading...</div>
    );

    return (
      <div className="container">
        <div>
          <p>當日獲利排行第一：{maxIntradayProfit.name} | {maxIntradayProfit.profit}</p>
        </div>
        {stockList}
      </div>
    )
  }
}

// const Stocks = ({ stocks, deleteStock }) => {
//   return (
//     <div>
//       <h1 className="center blue-text">Chip Viz</h1>
//     </div>
//   );
// }

export default Stocks;