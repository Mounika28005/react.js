import "./Task21.css"
const Task21 = ({ title, content, author }) => {
  return (
    <div className="blog-post-card">
      <h2 className="blog-post-title">Tittle:{title}A Book of Life</h2>
      <p className="blog-post-content">Content:{content}Its all about how we have to manage our time and how to be sustain life</p>
      <footer className="blog-post-footer">
        <span className="blog-post-author">By: {author}Mounika</span>
      </footer>
    </div>
  );
};

export default Task21;
