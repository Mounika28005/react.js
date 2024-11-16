const Task22 = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-container">
      <h2>Counter: {count}</h2>
      <div className="button-container">
        <button onClick={increment} className="counter-button">Increment</button>
        <button onClick={decrement} className="counter-button">Decrement</button>
      </div>
    </div>
  );
};

export default Task22;
