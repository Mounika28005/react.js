const Task18 = () => {
  const [count, setCount] = useState(0);

  
  useEffect(() => {
    console.log('Component mounted or updated');
  }, [count]); 
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Task18;

