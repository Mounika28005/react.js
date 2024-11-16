const Task26 = ({ user }) => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <img
          src={user.profilePicture}
          alt={`${user.name}'s profile`}
          className="profile-picture"
        />
        <div className="profile-details">
          <h2 className="profile-name">{user.name}</h2>
          <p className="profile-location">{user.location}</p>
        </div>
      </div>
    </div>
  );
};

export default Task26;
