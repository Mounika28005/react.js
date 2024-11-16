import Task13 from "./task13";

const UserCard = ({ name, email }) => {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Task13;
