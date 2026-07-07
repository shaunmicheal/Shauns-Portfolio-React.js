import image from "../assets/me.jpeg";

function About() {
  return (
    <div className="page-container">
      <img className="profile-img" src={image} alt="profile picture" />

      <p>
        Hi. My name is Shaun Takunda Jeranyama but you can call me Chimaz. I'm a
        Software Engineering student at Uncommon.org currently learning
        full-stack development. so far I have learned are HTML, CSS, Python,
        React.js and JavaScript.
      </p>

      <p>
        Outside of the bootcamp, I'm building Lidar, a facial recognition-based
        driver's license verification system aimed at government agencies in
        Zimbabwe. But to fully build this system, I need to learn more about
        backend development and database management. I'm also interested in
        learning more about AI and machine learning.
      </p>
    </div>
  );
}

export default About;
