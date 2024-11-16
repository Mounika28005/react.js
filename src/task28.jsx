const Task28 = () => {
  return (
    <div>
      <h1>Notification Example</h1>
      <Notification
        message="Your action was successful!"
        type="success"
      />

      <Notification
        message="Something went wrong. Please try again."
        type="error"
      />

      <Notification
        message="This is an informational message."
      />
      
      <Notification />
    </div>
  );
};

ReactDOM.render(<Task28 />, document.getElementById('root'));
