import React from 'react'

function Exponent({exponentStr, count, exponent}) {
  
  function mapExponentialStr() { // to print in string "num * num in <p> label"
    let text = '';
    for (let index = 0; index < exponent; index++) {
      text += ` ${count} *`;
    }
    text = text.slice(0, text.length - 1);
    return text;
  }
  
  return (
    <div className="exponent-counter-container">
        <p className="exponent-label">n{exponentStr}</p>
        <p className="exponent-result">{mapExponentialStr()} = <span className="total">{ Math.pow(count, exponent) }</span></p>
    </div>
  )
}

export default Exponent