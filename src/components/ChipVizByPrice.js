import React, { Component } from 'react'
import axios from "axios";

class Stocks extends Component {
  state = {
    stock: null
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:5000/api/ParseChipData/GroupByPrice/').then(res => {
      this.setState({
        stock: res.data
      })
    })
  }

  render() {
    // let maxIntradayProfit = { name: null, profit: 0 };
    const stockList = this.state.stock ? (
      this.state.stock.map((stock, index) => {
        const buyMostAmount = Math.max(...stock.records.map(r => r.買進股數));
        const buyMostBrokers = stock.records.filter(ele => ele.買進股數 === buyMostAmount).map(b => b.券商).join("/ ");
        const sellMostAmount = Math.max(...stock.records.map(r => r.賣出股數));
        const sellMostBrokers = stock.records.filter(ele => ele.賣出股數 === sellMostAmount).map(b => b.券商).join("/ ");
        // const totalBuyMoney = stock.records.reduce((sum, current) => { return sum + current.買進股數 * current.價格 }, 0);
        // const totalSellMoney = stock.records.reduce((sum, current) => { return sum + current.賣出股數 * current.價格 }, 0);
        // const intradayProfit = stock.records.reduce((sum, current) => { return sum + (current.賣出股數 - current.買進股數) * current.價格 }, 0);
        // if (intradayProfit >= maxIntradayProfit.profit) {
        //   maxIntradayProfit.name = stock.name
        //   maxIntradayProfit.profit = intradayProfit
        // };
        return (
          <div className="collection-item col s12 m6 l3" key={ index }>
            <div><strong>價格: </strong>{ stock.price }</div>
            <div><strong>買進股數最多: </strong>{ buyMostBrokers }；{ buyMostAmount }股</div>
            <div><strong>賣出股數最多: </strong>{ sellMostBrokers }；{ sellMostAmount }股</div>
              {
                stock.records.map((record, key) => {
                  // buyMost = record.買進股數 >= buyMost ? record.買進股數 : buyMost
                  // sellMost = record.賣出股數 >= sellMost ? record.賣出股數 : sellMost
                  return (
                    <div key={ key }>
                      <li>
                        <strong>券商: </strong>{record.券商} |
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