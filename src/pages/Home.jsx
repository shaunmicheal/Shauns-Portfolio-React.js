import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page-container">
      <h1>Hi, I'm Chimaz</h1>
      <p>
        Software Engineer in training, building full-stack apps with React and
        JavaScript.
      </p>
      <div className="home-links">
        <Link to="/projects">See my work</Link>
        <Link to="/contact">Get in touch</Link>
      </div>
    </div>
  );
}

export default Home;
