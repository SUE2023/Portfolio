import Photo from '../Photo.jpg'; 
import './About.css'; 

export default function About() {
  return (
    <section className="about-section">
      <h2>About Me</h2>
      <div className="about-container">
        <img src={Photo} alt="My Profile" className="profile-image" />
        <p>
          I’m a junior software engineer passionate about Software Engineering |
          web application.
        </p>
      </div>
    </section>
  );
}

