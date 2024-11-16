
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

// Sample data
const courses = [
  { id: 1, title: 'Course 1', lessons: [1, 2] },
  { id: 2, title: 'Course 2', lessons: [3, 4] },
];

const lessons = [
  { id: 1, title: 'Lesson 1', content: 'Content of Lesson 1', quizId: 1 },
  { id: 2, title: 'Lesson 2', content: 'Content of Lesson 2', quizId: 2 },
  { id: 3, title: 'Lesson 3', content: 'Content of Lesson 3', quizId: 3 },
  { id: 4, title: 'Lesson 4', content: 'Content of Lesson 4', quizId: 4 },
];

const quizzes = [
  { id: 1, questions: ['Q1: What is React?', 'Q2: What is JSX?'], options: [['Library', 'Framework', 'Language'], ['JavaScript Syntax', 'HTML-like Syntax', 'CSS-like Syntax']] },
  { id: 2, questions: ['Q1: What is State?', 'Q2: What is a Hook?'], options: [['Data', 'Function'], ['Stateful Function', 'Reusable Logic']] },
  { id: 3, questions: ['Q1: What is a Component?', 'Q2: What is JSX?'], options: [['Class', 'Function'], ['JavaScript Syntax', 'HTML-like Syntax']] },
  { id: 4, questions: ['Q1: What is the Virtual DOM?', 'Q2: What is React?', 'Q3: What is JSX?'], options: [['Representation of DOM', 'Real DOM'], ['Library', 'Framework'], ['HTML-like Syntax', 'JavaScript Code']] },
];

// CourseList Component
const CourseList = () => (
  <div className="project-course-list">
    <h1>Course List</h1>
    <ul>
      {courses.map(course => (
        <li key={course.id}>
          <Link to={`/course/${course.id}`}>{course.title}</Link>
        </li>
      ))}
    </ul>
  </div>
);

// CourseDetail Component
const CourseDetail = () => {
  const { id } = useParams();  // Get course ID from URL
  const course = courses.find(c => c.id === parseInt(id));

  return (
    <div className="project-course-detail">
      <h1>{course.title}</h1>
      <h2>Lessons</h2>
      <ul>
        {course.lessons.map(lessonId => (
          <li key={lessonId}>
            <Link to={`/lesson/${lessonId}`}>Lesson {lessonId}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Lesson Component
const Lesson = () => {
  const { id } = useParams();  // Get lesson ID from URL
  const lesson = lessons.find(l => l.id === parseInt(id));

  return (
    <div className="project-lesson">
      <h1>{lesson.title}</h1>
      <p>{lesson.content}</p>
      <Link to={`/quiz/${lesson.quizId}`}>Take Quiz</Link>
    </div>
  );
};

// Quiz Component
const Quiz = () => {
  const { id } = useParams();  // Get quiz ID from URL
  const quiz = quizzes.find(q => q.id === parseInt(id));
  const [answers, setAnswers] = useState([]);
  const [progress, setProgress] = useState(0);

  // Function to handle answer change and progress calculation
  const handleAnswerChange = (e, questionIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = e.target.value;
    setAnswers(newAnswers);

    // Calculate progress based on answered questions
    const completedQuestions = newAnswers.filter(a => a !== undefined).length;
    setProgress((completedQuestions / quiz.questions.length) * 100);
  };

  return (
    <div className="project-quiz">
      <h1>Quiz {id}</h1>
      <div>
        {quiz.questions.map((question, index) => (
          <div key={index}>
            <p>{question}</p>
            {quiz.options[index].map((option, optionIndex) => (
              <label key={optionIndex}>
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  checked={answers[index] === option}
                  onChange={(e) => handleAnswerChange(e, index)}
                />
                {option}
              </label>
            ))}
          </div>
        ))}
      </div>
      <p>Progress: {Math.round(progress)}%</p>
    </div>
  );
};

// Main Project Component (with Router and Routes)
const Project = () => (
  <Router>
    <div className="project">
      <Routes>
        {/* Define routes for different components */}
        <Route path="/" element={<CourseList />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/lesson/:id" element={<Lesson />} />
        <Route path="/quiz/:id" element={<Quiz />} />
      </Routes>
    </div>
  </Router>
);

export default Project;
