//import logo from './logo.svg';
import './App.css'; 
import {useState,useEffect} from 'react';
import axios from 'axios';

function App() {

  const [marketcoin, updateMarketcoin] = useState([]);

  //coin/market
  //https://api.coingecko.com/api/v3/coins/markets?vs_currency=EUR&order=market_cap_desc&per_page=10&page=10&sparkline=false

  
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins')
      .then(response => {
        console.log(response.data);
        updateMarketcoin(response.data);
        alert("api data copied to updateMarketcoin");
      })
      .catch(() => {
        console.log("PLease enter correct coin link");
      })

  }, [])



  return (
    <div>
    <p>
      <table>
        {marketcoin.map(marketcoinIndex => {
          return <tr>   
            <tr><td><pre><h2>Image:  </h2></pre></td><td>{<img src={marketcoinIndex.image.thumb} />}</td></tr>
            <tr><td><pre><h2>Name:   </h2></pre></td><td>{marketcoinIndex.name}</td></tr>
            <tr><td><pre><h2>Symbol:             </h2></pre></td><td>{marketcoinIndex.symbol}</td></tr>
            <tr><td><pre><h2>Current Price:       </h2></pre></td><td>{marketcoinIndex.market_data.current_price.eur}</td></tr>
            <tr><td><pre><h2>High 24 hour price:  </h2></pre></td><td>{marketcoinIndex.market_data.high_24h.eur}</td></tr>
            <tr><td><pre><h2>Low 24 hour price:   </h2></pre></td><td>{marketcoinIndex.market_data.low_24h.eur}</td></tr>
            <br></br>
          </tr>
        })}
      </table>

    </p>
  </div>

  );
}

export default App;
