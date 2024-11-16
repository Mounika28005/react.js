const isLoggedIn = true; 

const Task8 = () => {
  return (
    <div>
      {isLoggedIn ? (
        <p>Welcome back, user!</p>
      ) : (
        <p>Please log in to continue.</p>
      )}
    </div>
  );
};
export default Task8;