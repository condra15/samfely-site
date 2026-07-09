import { DoodleScatter } from '../components/ChalkDoodles';
import RainbowText from '../components/RainbowText';
import TapeFrame from '../components/TapeFrame';
import adeolaImg from '../assets/adeola.jpg';
import kimolynImg from '../assets/kimolyn.jpeg';
import yvonneImg from '../assets/yvonne.jpeg';
import tremayneImg from '../assets/tremayne.jpeg';
import tiles2 from '../assets/activity-tiles-2.jpg';
import connect4 from '../assets/activity-connect4.jpg';
import aquariumImg from '../assets/aquarium.jpg';
import homework from '../assets/homework.jpg';
import artProject from '../assets/art-project.jpg';
import fox5Teacher from '../assets/fox5-teacher.png';
import fox5Robots from '../assets/fox5-robots.png';
import partnerRobofun from '../assets/partner-robofun.png';
import partnerVision from '../assets/partner-vision.png';
import partnerZoe from '../assets/partner-zoe.png';
import partnerLwc from '../assets/partner-lwc.png';
import schoolPs92 from '../assets/school-ps92.png';
import schoolPs397 from '../assets/school-ps397.png';
import schoolPs249 from '../assets/school-ps249.png';
import schoolPs235 from '../assets/school-ps235.png';
import schoolExplore from '../assets/school-explore.png';
import schoolSuccess from '../assets/school-success.png';
import schoolAscend from '../assets/school-ascend.png';
import './About.css';

const teamMembers = [
  { name: 'Adeola Aderin', role: 'Chief Executive Officer', image: adeolaImg, color: '#E24B4A' },
  { name: 'Kimolyn Massop', role: 'Human Resources Personnel', image: kimolynImg, color: '#378ADD' },
  { name: 'Yvonne Perez', role: 'Program Site Director', image: yvonneImg, color: '#639922' },
  { name: 'Tremayne Burchette', role: 'Program Site Director', image: tremayneImg, color: '#7F77DD' },
];

const programs = [
  { title: 'Homework Help & Tutoring', desc: 'Every afternoon starts with structured homework time. Our coordinators work with scholars one-on-one and in small groups, using homework as a tutoring tool so students truly understand the material — not just complete it.', color: '#378ADD' },
  { title: 'Robotics & STEM', desc: 'Through our partnership with RoboFun, scholars build and program robots, tackle hands-on science experiments, and develop real engineering skills. Parents tell us their kids come home excited to explain what they built.', color: '#639922' },
  { title: 'Creative Arts & Expression', desc: 'Art projects, music, and creative activities give scholars space to express themselves and discover new talents. From painting to crafts, creativity is celebrated here, not graded.', color: '#D85A30' },
  { title: 'Field Trips & Exploration', desc: 'Regular outings to museums, aquariums, parks, and cultural venues across New York City expand horizons and turn the city into a classroom.', color: '#7F77DD' },
];

const partners = [
  { name: 'RoboFun', image: partnerRobofun, url: 'https://docs.google.com/presentation/d/1GiKBG9KE3Xmsc-vyl0ivZ7aYZ3Zkz1z44KGj9_XRhgk/edit?slide=id.p1' },
  { name: 'Vision Education & Media', image: partnerVision, url: null },
  { name: 'Inspired By Zoe', image: partnerZoe, url: 'https://www.instagram.com/inspiredbyzoey/' },
  { name: 'Lifting While Climbing', image: partnerLwc, url: 'https://www.liftingwhileclimbing.com' },
];

const schools = [
  { name: 'PS 92', image: schoolPs92 },
  { name: 'PS 397 Foster-Laurie', image: schoolPs397 },
  { name: 'PS 249 The Caton School', image: schoolPs249 },
  { name: 'PS 235', image: schoolPs235 },
  { name: 'Explore Charter School', image: schoolExplore },
  { name: 'Success Academy', image: schoolSuccess },
  { name: 'Ascend Charter School', image: schoolAscend },
];

export default function About() {
  return (
    <div className="about">
      {/* Story */}
      <section className="story section-wb">
        <DoodleScatter variant="hero" />
        <div className="container story-content">
          <span className="story-badge chalk-subheading">Rooted in Brooklyn · Built for families</span>
          <h1 className="story-title chalk-heading"><RainbowText text="Enhancing Education Since 2017" /></h1>
          <div className="story-body">
            <h2 className="story-sub chalk-heading">What does Samfely mean?</h2>
            <p>Samfely takes its name from two extraordinary people: <strong>Samuel</strong>, a bishop, and <strong>Felicia</strong>, a devoted schoolteacher, a husband and wife whose lives in Nigeria were a living testament to faith, education, and unconditional love for family and community. Together, they championed that every person, regardless of race, religion, or circumstance, deserves to be supported, educated, and seen.</p>
            <p>When Felicia passed in 2015, her granddaughter Adeola and Samuel founded Samfely in her honor, rooting the organization in everything Felicia stood for and everything Samuel always believed in. Though both Samuel and Felicia have since passed, their legacy is not gone. It shows up every afternoon in Brooklyn, in every child who feels safe enough to learn, every family that feels supported, and every student who discovers what they are truly capable of.</p>
            <p><strong>Samfely is their story, continued.</strong></p>
            <h2 className="story-sub chalk-heading" style={{ marginTop: '40px' }}>Who we are</h2>
            <p>Samfely is a women-owned and women-run afterschool organization serving K–8 students across two Brooklyn locations. Since 2017, we have built a community rooted in warmth, accountability, and genuine love for the families we serve.</p>
          </div>
          <div className="story-photos">
            <TapeFrame colorSet={0}><img src={connect4} alt="Coordinator playing games with scholars" className="story-photo" /></TapeFrame>
            <TapeFrame colorSet={2}><img src={tiles2} alt="Kids building together" className="story-photo" /></TapeFrame>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mission section-wb-alt">
        <div className="container">
          <div className="mission-card">
            <h2 className="mission-title chalk-heading"><RainbowText text="Our mission" /></h2>
            <p className="mission-text">Our programs blend structured academic support with hands-on robotics, creative enrichment, and social-emotional learning — because we know that a child who feels safe and supported can accomplish extraordinary things.</p>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="programs section-wb">
        <DoodleScatter variant="default" />
        <div className="container">
          <h2 className="section-title chalk-heading"><RainbowText text="Our programs" /></h2>
          <div className="programs-grid">
            {programs.map((p, i) => (
              <div className="program-card" key={i} style={{ borderLeftColor: p.color }}>
                <h3 className="program-title chalk-subheading" style={{ color: p.color }}>{p.title}</h3>
                <p className="program-desc">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="programs-photos">
            <TapeFrame colorSet={3}><img src={homework} alt="Scholars doing homework" className="programs-photo" /></TapeFrame>
            <TapeFrame colorSet={1}><img src={artProject} alt="Kids showing art projects" className="programs-photo" /></TapeFrame>
          </div>
        </div>
      </section>

      {/* Robotics in Action - Fox5 */}
      <section className="robotics section-wb-alt">
        <div className="container">
          <h2 className="section-title chalk-heading"><RainbowText text="Robotics in action" /></h2>
          <p className="robotics-subtitle">Through our partnership with RoboFun, Samfely scholars build, program, and dance with robots. Here is Fox 5 NY letting people know the cool work Robofun does.</p>
          <div className="fox5-cards">
            <a href="https://www.fox5ny.com/video/1476944" target="_blank" rel="noopener noreferrer" className="fox5-card">
              <TapeFrame colorSet={0}>
                <img src={fox5Teacher} alt="RoboFun instructor working with a scholar on robotics" className="fox5-img" />
              </TapeFrame>
              <span className="fox5-label chalk-subheading">Watch on Fox 5 NY →</span>
            </a>
            <a href="https://www.fox5ny.com/video/1476944" target="_blank" rel="noopener noreferrer" className="fox5-card">
              <TapeFrame colorSet={2}>
                <img src={fox5Robots} alt="Scholar programming robots with laptop" className="fox5-img" />
              </TapeFrame>
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats section-wb">
        <div className="container">
          <div className="about-stats-grid">
            <div className="about-stat"><span className="about-stat-number chalk-heading" style={{color:'var(--c-amber)'}}>15</span><span className="about-stat-label chalk-subheading">Teacher coordinators yearly</span></div>
            <div className="about-stat"><span className="about-stat-number chalk-heading" style={{color:'var(--c-green)'}}>400+</span><span className="about-stat-label chalk-subheading">Scholars graduated</span></div>
            <div className="about-stat"><span className="about-stat-number chalk-heading" style={{color:'var(--c-blue)'}}>9</span><span className="about-stat-label chalk-subheading">Dedicated volunteers</span></div>
            <div className="about-stat"><span className="about-stat-number chalk-heading" style={{color:'var(--c-coral)'}}>15</span><span className="about-stat-label chalk-subheading">People helped</span></div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team section-wb-alt">
        <DoodleScatter variant="sparse" />
        <div className="container">
          <h2 className="section-title chalk-heading"><RainbowText text="Meet the team" /></h2>
          <div className="team-grid">
            {teamMembers.map((m) => (
              <div className="team-card" key={m.name} style={{ borderColor: `${m.color}30` }}>
                <TapeFrame colorSet={teamMembers.indexOf(m)}>
                  <img src={m.image} alt={m.name} className="team-photo" />
                </TapeFrame>
                <h3 className="team-name chalk-subheading">{m.name}</h3>
                <p className="team-role" style={{ color: m.color }}>{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="partners section-wb">
        <div className="container">
          <h2 className="section-title chalk-heading"><RainbowText text="Our partners" /></h2>
          <div className="partners-grid">
            {partners.map((p) => (
              <div className="partner-card" key={p.name}>
                {p.url ? (
                  <a href={p.url} target="_blank" rel="noopener noreferrer">
                    <img src={p.image} alt={p.name} className="partner-logo" />
                  </a>
                ) : (
                  <img src={p.image} alt={p.name} className="partner-logo" />
                )}
                <span className="partner-name chalk-subheading">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schools */}
      <section className="schools section-wb-alt">
        <div className="container">
          <h2 className="section-title chalk-heading"><RainbowText text="Schools we serve" /></h2>
          <p className="schools-subtitle">Through our partnership with <strong>Hansteps After School</strong>, Samfely serves children from the following Brooklyn schools:</p>
          <div className="schools-grid">
            {schools.map((s) => (
              <div className="school-card" key={s.name}>
                <img src={s.image} alt={s.name} className="school-logo" />
                <span className="school-name">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer */}
      <section className="volunteer section-wb">
        <DoodleScatter variant="sparse" />
        <div className="container volunteer-content">
          <h2 className="volunteer-title chalk-heading"><RainbowText text="Change a child's day" /></h2>
          <p className="volunteer-text">Every afternoon, our scholars walk through the door looking for a mentor, a role model, someone who believes in them. You could be that person. Whether you help with homework, lead a creative project, or simply show up and listen — your time changes lives.</p>
          <p className="volunteer-text"><strong>No experience needed. Just a big heart and a few hours a week.</strong></p>
          <a href="https://docs.google.com/forms/d/e/YOUR_VOLUNTEER_FORM_ID/viewform" className="btn-volunteer" target="_blank" rel="noopener noreferrer">Become a volunteer</a>
        </div>
      </section>
    </div>
  );
}
