import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DoodleScatter } from '../components/ChalkDoodles';
import RainbowText from '../components/RainbowText';
import TapeFrame from '../components/TapeFrame';
import aquariumImg from '../assets/aquarium.jpg';
import kidsImg from '../assets/kids-group.jpg';
import faqImg from '../assets/faq.jpg';
import logoImg from '../assets/logo.png';
import tiles1 from '../assets/activity-tiles-1.jpg';
import tiles3 from '../assets/activity-tiles-3.jpg';
import tiles4 from '../assets/activity-tiles-4.jpg';
import connect4 from '../assets/activity-connect4.jpg';
import artProject from '../assets/art-project.jpg';
import homework from '../assets/homework.jpg';
import './Home.css';

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button className="faq-question" onClick={() => setOpen(!open)}>
        <span>{question}</span>
        <span className="faq-icon">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="faq-answer">{answer}</div>}
    </div>
  );
}

const testimonials = [
  { quote: "He loves telling me about the robots they built, how they programmed them, and what challenges they solved. He often asks if we can try similar projects at home. He gets so excited about the experiments they do — he explains the science behind it with so much enthusiasm.", name: "Parent of scholar", color: '#378ADD' },
  { quote: "Before Samfely, homework time at home was often a battle — he would resist, get frustrated, and lose focus quickly. Now, he actually looks forward to getting his homework done because the staff help him understand it in a way that makes sense. He's become more independent and takes more initiative with his schoolwork.", name: "Parent of scholar", color: '#639922' },
  { quote: "They were shy at first but the other children and staff was very welcoming and supportive. Now my kids never want to leave! Samfely has helped them communicate better, build friendships, and show more confidence.", name: "Parent of two scholars", color: '#D85A30' },
  { quote: "When I lost my job and was unemployed for 9 months, Samfely absorbed my child from Hansteps and enrolled him for free. The value we get far exceeds the cost. The staff are attentive, patient, and genuinely invested in the children.", name: "Parent of scholar", color: '#7F77DD' },
];

export default function Home() {
  const faqs = [
    { question: "What is STEAM Education?", answer: "STEAM Education is an approach to learning that uses Science, Technology, Engineering, the Arts and Mathematics as access points for guiding student inquiry, dialogue, and critical thinking." },
    { question: "Why is Social Emotional Learning (SEL) important?", answer: "SEL is the process through which all young people and adults acquire and apply the knowledge, skills, and attitudes to develop healthy identities, manage emotions and achieve personal and collective goals, feel and show empathy for others, establish and maintain supportive relationships, and make responsible and caring decisions." },
    { question: "What does a typical day look like?", answer: "Every afternoon starts with Community Circle at 2:30pm — a moment to connect, reflect, and transition from the school day. From there, students move into a 90-minute Power Hour for homework help and tutoring, followed by STEAM enrichment activities until dismissal at 6:00pm." },
    { question: "Is there a cost to attend?", answer: "With a mission of making creative programming available to all students, we provide free programming through our partnership with Hansteps Afterschool." },
    { question: "How do I enroll my child in Samfely?", answer: "Fill out our interest form and a member of our team will reach out within 24-48 hours to walk you through next steps, answer your questions, and confirm availability. We're excited to learn with you soon!" },
  ];

  return (
    <div className="home">
      <section className="hero section-wb">
        <DoodleScatter variant="hero" />
        <div className="container hero-content">
          <img src={logoImg} alt="Samfely Afterschool logo" className="hero-logo" />
          <span className="hero-badge chalk-subheading">Serving Brooklyn since 2017</span>
          <h1 className="hero-title chalk-heading"><RainbowText text="Learning, Growing, & Leading" /></h1>
          <p className="hero-subtitle chalk-subheading">Samfely is a Brooklyn-based afterschool community where K–8 students explore, grow their confidence, and discover what they're capable of every day after school.</p>
          <div className="hero-actions">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfqaDDM6_VE82kpKdMeB6MzzeosbjTRSxlKp6bc7NaPeMVHNg/viewform" className="btn-primary" target="_blank" rel="noopener noreferrer">Enroll your child</a>
            <Link to="/about" className="btn-outline">Our story</Link>
          </div>
        </div>
        <div className="hero-photos container">
          <TapeFrame colorSet={0}><img src={kidsImg} alt="Samfely scholars together" className="hero-photo-img" /></TapeFrame>
          <TapeFrame colorSet={1}><img src={aquariumImg} alt="Aquarium field trip" className="hero-photo-img" /></TapeFrame>
          <TapeFrame colorSet={2}><img src={tiles1} alt="Kids building with magnetic tiles" className="hero-photo-img" /></TapeFrame>
        </div>
      </section>

      <section className="pillars section-wb-alt">
        <DoodleScatter variant="default" />
        <div className="container">
          <h2 className="section-title chalk-heading"><RainbowText text="Our three pillars" /></h2>
          <div className="pillars-grid">
            <div className="pillar-card">
              <div className="pillar-icon" style={{ color: 'var(--c-blue)' }}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
              </div>
              <h3 className="pillar-title chalk-subheading">Digital Literacy</h3>
              <p className="pillar-desc">Scholars learn to shape technology as much as they use it. From digital tools to creative projects, we empower confident and curious learners.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon" style={{ color: 'var(--c-pink)' }}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21C12 21 4 16 4 10.5C4 7.5 6.5 5 9 5C10.5 5 11.5 6 12 7C12.5 6 13.5 5 15 5C17.5 5 20 7.5 20 10.5C20 16 12 21 12 21Z" /></svg>
              </div>
              <h3 className="pillar-title chalk-subheading">Social-Emotional Learning</h3>
              <p className="pillar-desc">Every session starts with connection. We build emotional intelligence, conflict resolution, and community alongside every lesson.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon" style={{ color: 'var(--c-coral)' }}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r="2.5" /><path d="M3 20C3 17 7 14 12 14C13 14 14 14.1 15 14.4" /><path d="M17 14L19 17L21 14" /><path d="M19 17V22" /></svg>
              </div>
              <h3 className="pillar-title chalk-subheading">Creative Enrichment</h3>
              <p className="pillar-desc">Our enrichment activities give students the freedom to make, explore, and express — turning every afternoon into an adventure in learning.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="day-section section-wb">
        <DoodleScatter variant="sparse" />
        <div className="container">
          <h2 className="section-title chalk-heading"><RainbowText text="A day at Samfely" /></h2>
          <p className="day-subtitle chalk-subheading">From building projects to board games with mentors — here's what a typical afternoon looks like.</p>
          <div className="day-grid">
            <TapeFrame colorSet={3}><img src={tiles3} alt="Girls constructing together" className="day-photo" /></TapeFrame>
            <TapeFrame colorSet={4}><img src={connect4} alt="Playing Connect Four with coordinator" className="day-photo" /></TapeFrame>
            <TapeFrame colorSet={0}><img src={artProject} alt="Kids showing off art projects" className="day-photo" /></TapeFrame>
            <TapeFrame colorSet={1}><img src={homework} alt="Scholars doing homework together" className="day-photo" /></TapeFrame>
            <TapeFrame colorSet={2}><img src={tiles4} alt="Older kids collaborating on builds" className="day-photo" /></TapeFrame>
            <TapeFrame colorSet={3}><img src={tiles1} alt="Scholars building with magnetic tiles" className="day-photo" /></TapeFrame>
          </div>
        </div>
      </section>

      <section className="stats section-wb-alt">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item"><span className="stat-number chalk-heading" style={{color:'var(--c-blue)'}}>10:1</span><span className="stat-label chalk-subheading">Class ratio</span></div>
            <div className="stat-item"><span className="stat-number chalk-heading" style={{color:'var(--c-green)'}}>100%</span><span className="stat-label chalk-subheading">Weekly homework completion</span></div>
            <div className="stat-item"><span className="stat-number chalk-heading" style={{color:'var(--c-coral)'}}>400+</span><span className="stat-label chalk-subheading">Scholars graduated</span></div>
            <div className="stat-item"><span className="stat-number chalk-heading" style={{color:'var(--c-purple)'}}>78%</span><span className="stat-label chalk-subheading">Students improved in core subjects</span></div>
          </div>
        </div>
      </section>

      <section className="testimonials section-wb">
        <div className="container">
          <h2 className="section-title chalk-heading"><RainbowText text="What parents say" /></h2>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i} style={{ borderColor: t.color }}>
                <p className="testimonial-quote">"{t.quote}"</p>
                <p className="testimonial-name chalk-subheading" style={{ color: t.color }}>— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq section-wb-alt">
        <DoodleScatter variant="sparse" />
        <div className="container">
          <div className="faq-layout">
            <div className="faq-content">
              <h2 className="section-title chalk-heading" style={{ textAlign: 'left' }}><RainbowText text="Frequently asked questions" /></h2>
              <div className="faq-list">
                {faqs.map((faq, i) => <FAQItem key={i} question={faq.question} answer={faq.answer} />)}
              </div>
            </div>
            <div className="faq-image-wrap">
              <TapeFrame colorSet={2}><img src={faqImg} alt="FAQ blocks" className="faq-image" /></TapeFrame>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section section-wb">
        <div className="container cta-content">
          <h2 className="cta-title chalk-heading"><RainbowText text="Ready to enroll?" /></h2>
          <p className="cta-subtitle chalk-subheading">Spots fill up fast. Secure your child's place in our free after-school program today.</p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfqaDDM6_VE82kpKdMeB6MzzeosbjTRSxlKp6bc7NaPeMVHNg/viewform" className="btn-primary" target="_blank" rel="noopener noreferrer">Enroll your child</a>
        </div>
      </section>
    </div>
  );
}
