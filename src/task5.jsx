import "./task.css"
function task5() {
  
  const name = "React";
  const message = "Welcome to the world of JavaScript expressions within JSX!";

  return (
    <div className="App">
      <h1>Hello, {name}!</h1> 

      <p className="Host">{message}</p> 
      <p>The current year is {new Date().getFullYear()}.</p> 
    </div>
  );
}

export default task5;
