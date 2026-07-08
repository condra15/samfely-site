import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.png';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo-wrap">
              <img src={logoImg} alt="Samfely logo" className="footer-logo-img" />
              <span className="footer-logo">Samfely</span>
            </div>
            <p className="footer-tagline">Learning, Growing, & Leading</p>
            <p className="footer-address">110 Lenox Rd, Brooklyn, NY 11226</p>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">Navigate</h4>
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/about" className="footer-link">About</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">Get in touch</h4>
            <a href="mailto:yetuna@samfely.org" className="footer-link">yetuna@samfely.org</a>
            <a href="tel:+16469324778" className="footer-link">(646) 932-4778</a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfqaDDM6_VE82kpKdMeB6MzzeosbjTRSxlKp6bc7NaPeMVHNg/viewform" className="footer-link footer-enrollment-link" target="_blank" rel="noopener noreferrer">Enrollment form</a>
            <a href="https://docs.google.com/forms/d/e/YOUR_VOLUNTEER_FORM_ID/viewform" className="footer-link footer-volunteer-link" target="_blank" rel="noopener noreferrer">Volunteer with us</a>
          </div>
        </div>
        <div className="footer-bottom"><p>&copy; {new Date().getFullYear()} Samfely. All rights reserved.</p></div>
      </div>
    </footer>
  );
}
