import React from 'react'

const Stocks = ({ stocks, deleteStock }) => {
  const stockList = stocks.length ? (
    stocks.map(stock => {
      return (
        <div className="collection-item col s12 m6 l3 grey" key={ stock.id }>
          <button className="waves-effect waves-light btn-small red lighten-2" onClick={() => deleteStock(stock.id)}>delete</button>
          <div>Name: { stock.name }</div>
          <div>Code: { stock.code }</div>
          <div>Price: { stock.price }</div>
        </div>
      )
    })
  ) : (
    <p className="center">You have no stock left!</p>
  );

  return (
    <div className="stock-list collection row">
      {stockList}
    </div>
  );
}

export default Stocks;