const App = () => {
  const handleClick = (message) => {
    alert(message);
  };

  return (
    <div className="app">
      <h1>Reusable Button Examples</h1>
      <Button
        text="Click Me"
        onClick={() => handleClick('You clicked the "Click Me" button!')}
        style={{ backgroundColor: 'green', color: 'white' }}
      />
      <Button
        text="Submit"
        onClick={() => handleClick('You clicked the "Submit" button!')}
        style={{ backgroundColor: 'blue', color: 'white' }}
      />
      <Button
        text="Cancel"
        onClick={() => handleClick('You clicked the "Cancel" button!')}
        style={{ backgroundColor: 'red', color: 'white' }}
      />
      <Button
        text="Learn More"
        onClick={() => handleClick('You clicked the "Learn More" button!')}
        style={{ backgroundColor: 'purple', color: 'white' }}
      />
    </div>
  );
};

export default App;
