import "./App.css";
import Counter from "./components/Counter";
import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";
import Exponent from "./components/Exponent";
import { useState } from "react";


function App () {
  const numbers = [2,3,4,5,6];
  const exponentString = [
    "²",
    "³",
    "⁴",
    "⁵",
    "⁶",
  ];

  const [count, setCount] = useState(0);

  const decrement = () => setCount((prevCount) => prevCount - 1);
  const increment = () => setCount((prevCount) => prevCount + 1);

  function mapExponent () {
    const mappingExponent = numbers.map((expo, index) => <Exponent key={index} exponentStr={exponentString[index]} count={count} exponent={expo}/>);
    return mappingExponent;
  }
  
  return (
    <div className="App">
      <h2><em>Counter</em></h2>
  
      <Counter count={ count } decrement={ decrement } increment={ increment }/>

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
        { mapExponent() }
      </div>
    </div>
  );
}

export default App;
