import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../PortfolioLogo.jpg'; 

export default function Header() {
  return (
   <header className="header">
      <div className="logo-container">
        <img src={Logo} alt="Portfolio Logo" className="logo" />
        <h2>My Portfolio</h2>
      </div>
    <nav className="nav">
      <ul>
        <li><Link to="/">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
   </header>
  );
}
