import { DoodleScatter } from '../components/ChalkDoodles';
import RainbowText from '../components/RainbowText';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact">
      <section className="contact-hero section-wb">
        <DoodleScatter variant="sparse" />
        <div className="container contact-hero-content">
          <h1 className="contact-title chalk-heading"><RainbowText text="Get in touch" /></h1>
          <p className="contact-subtitle">Have questions about enrollment, volunteering, or partnerships? We'd love to hear from you.</p>
        </div>
      </section>
      <section className="contact-main section-wb-alt">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-block">
                <h3 className="contact-block-title chalk-subheading" style={{color:'var(--c-blue)'}}>Email</h3>
                <a href="mailto:kmassop@samfely.org" className="contact-link">kmassop@samfely.org</a>
                <a href="mailto:hbabalola@samfely.org" className="contact-link">hbabalola@samfely.org</a>
              </div>
              <div className="contact-block">
                <h3 className="contact-block-title chalk-subheading" style={{color:'var(--c-green)'}}>Phone</h3>
                <a href="tel:+16469324778" className="contact-link">Call us: (718) 708-1990</a>
              </div>
              <div className="contact-block">
                <h3 className="contact-block-title chalk-subheading" style={{color:'var(--c-coral)'}}>Visit us</h3>
                <p className="contact-address">110 Lenox Rd<br />Brooklyn, NY 11226</p>
              </div>
              <div className="contact-map">
                <iframe title="Samfely location" src="https://maps.google.com/maps?q=110%20Lenox%20Rd%20Brooklyn%20NY&t=m&z=15&output=embed&iwloc=near" width="100%" height="200" style={{ border: 0, borderRadius: '12px' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
            <div className="contact-form-wrap">
              <h2 className="contact-form-title chalk-heading" style={{color:'var(--c-blue)'}}>Enroll your child</h2>
              <p className="contact-form-desc">Fill out the form below and we'll be in touch within 48 hours.</p>
              <div className="google-form-embed">
                <iframe title="Enrollment form" src="https://docs.google.com/forms/d/e/1FAIpQLSfqaDDM6_VE82kpKdMeB6MzzeosbjTRSxlKp6bc7NaPeMVHNg/viewform" width="100%" height="600" style={{ border: 0, borderRadius: '12px' }}>Loading…</iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-volunteer section-wb">
        <div className="container contact-volunteer-content">
          <h2 className="contact-volunteer-title chalk-heading"><RainbowText text="Want to volunteer?" /></h2>
          <p className="contact-volunteer-text">Love working with kids? We're always looking for caring people to mentor, tutor, and inspire our scholars. A few hours a week can change a child's trajectory.</p>
          <a href="https://forms.gle/WQihAnkFv8xNRhEb7" className="btn-volunteer-contact" target="_blank" rel="noopener noreferrer">Sign up to volunteer</a>
        </div>
      </section>
    </div>
  );
}
