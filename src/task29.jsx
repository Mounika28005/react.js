const Task29 = () => {
  return (
    <div>
      <MyComponent name="John Doe" age={25} isAdmin={true} />
      {/* This will render: 
          Hello, John Doe!
          Age: 25
          Status: Admin
      */}
      
      <MyComponent />
      {/* This will render with default values: 
          Hello, Guest!
          Age: 30
          Status: User
      */}
    </div>
  );
};

export default Task29;




