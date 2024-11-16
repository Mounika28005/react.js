import './Task20.css'
const Task20 = ({ title, content, author }) => {
  return (
    <div className="blog-post-card">
      <h2 className="blog-post-title">Tittle:{title}</h2>
      <p className="blog-post-content">Content:{content}</p>
      <footer className="blog-post-footer">
        <span className="blog-post-author">By: {author}</span>
      </footer>
    </div>
  );
};

export default Task20;
