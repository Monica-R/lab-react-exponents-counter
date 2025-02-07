const Counter = ({ count, decrement, increment }) => {
  //console.info('count:', count); //prop -estado- pasada de App.jsx
  return (
    <div className="counter-container">
      <p className="counter-value">{count}</p>
      <button className="counter-button" onClick={decrement}>-</button>
      <button className="counter-button" onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
