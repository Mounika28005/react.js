const Task19 = ({ name, price, description }) => {
  return (
    <div className="product-card">
      <h2 className="product-name">{name}</h2>
      <p className="product-price">${price}</p>
      <p className="product-description">{description}</p>
    </div>
  );
};

export default Task19;
