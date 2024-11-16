const Task11= ({ text, onClick, style }) => {
  return (
    <button onClick={onClick} style={style} className="button">
      {text}
    </button>
  );
};

export default Task11;
