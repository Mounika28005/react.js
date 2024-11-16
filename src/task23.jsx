
const Task23 = ({ text, onClick, className }) => {
  return (
    <div className={`button ${className}`} onClick={onClick}>
      {text}
    </div>
  );
};

export default Task23;
