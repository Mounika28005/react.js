// Task27 Component with Default Props
const Task27 = ({ title, description, status }) => {
  return (
    <div className="task-container">
      <h2 className="task-title">{title}</h2>
      <p className="task-description">{description}</p>
      <p className="task-status">Status: {status}</p>
    </div>
  );
};

// Default props for the Task27 component
Task27.defaultProps = {
  title: 'Untitled Task',
  description: 'No description provided.',
  status: 'Pending',
};

export default Task27;
