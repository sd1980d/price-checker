import React, { useEffect, useState } from 'react';
import './CoinPairItem.scss';

export default function CoinPairItem(props) {

    //1. get the chosen pair from props
    //2. add them to state using useState()
    //3. make api call using useEffect()
    //4. return data into state??

    //1.
       const str = props.pairname;
       const arr = str.split("-");
       const baseCurrency = arr[0];
       const quoteCurrency = arr[1];

        const [resultData, setResultData] = useState('');

    useEffect( (baseCurrency, quoteCurrency) => {
        var myHeaders = new Headers();
myHeaders.append("Cookie", "__cfduid=d264de9247153bc675b9a4432f19e228e1613923526");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.cryptonator.com/api/ticker/btc-usdt", requestOptions)
  .then(response => response.text())
  .then(result => setResultData(result))
  .catch(error => console.log('error', error));
    } );





    return (
        <div className="coinpair-container">
            <h3 className="base-currency">Base Currency: {baseCurrency}</h3>
            <h3 className="quote-currency">Quote Currency: {quoteCurrency}</h3>
            <h3 className="result-data">Result Data: {resultData}</h3>
            <p></p>
        </div>
    )
}
