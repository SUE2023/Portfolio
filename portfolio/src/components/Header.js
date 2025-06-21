import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav>
      <h2>My Portfolio</h2>
      <ul>
        <li><Link to="/">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
