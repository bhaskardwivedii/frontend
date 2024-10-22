import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './AboutUs.css';

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const aboutRef = useRef(null);
  const teamRefs = useRef([]);

  useEffect(() => {
    const sections = aboutRef.current.children;

    // Animate about section text
    gsap.fromTo(
      sections,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 80%',
        },
      }
    );

    // Animate team members
    teamRefs.current.forEach((member) => {
      gsap.fromTo(
        member,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: member,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  const addToTeamRefs = (el) => {
    if (el && !teamRefs.current.includes(el)) {
      teamRefs.current.push(el);
    }
  };

  return (
    <div className="about-container" ref={aboutRef}>
      <h1 className="about-title">About Us</h1>
      <p className="about-description">
        Welcome to our insurance claims decentralized application (DApp), where we leverage the power of blockchain technology to transform the insurance industry.
      </p>
      <p>
        At <strong>BlockSure Innovations</strong>, we believe that everyone deserves a hassle-free experience when it comes to insurance claims. Traditional processes can be slow, cumbersome, and opaque, often leaving policyholders frustrated. Our solution utilizes smart contracts on the Ethereum blockchain to automate claims processing, ensuring that claims are handled quickly and fairly.
      </p>
      <p>
        Join us on our journey to revolutionize the insurance claims process and experience the future of insurance with <strong>BlockSure</strong>.
      </p>

      <h2 className="team-title">Our Team</h2>
      <div className="team-members">
        <div className="team-member" ref={addToTeamRefs}>
          <h3 className="member-name">John Doe</h3>
          <p className="member-role">CEO & Founder</p>
          <p className="member-bio">John has over a decade of experience in technology and entrepreneurship, leading teams to success in various startups.</p>
        </div>
        <div className="team-member" ref={addToTeamRefs}>
          <h3 className="member-name">Jane Smith</h3>
          <p className="member-role">CTO</p>
          <p className="member-bio">Jane is a blockchain expert with a passion for innovative solutions, driving technical excellence in every project.</p>
        </div>
        <div className="team-member" ref={addToTeamRefs}>
          <h3 className="member-name">Alice Johnson</h3>
          <p className="member-role">CMO</p>
          <p className="member-bio">Alice brings years of marketing experience to the team, helping to spread our message and connect with clients.</p>
        </div>
      </div>

      {/* Scrolling logos section */}
      <div className="logo-marquee">
        <div className="logo-marquee-inner">
          <img src="https://cdn.logojoy.com/wp-content/uploads/2018/07/30124949/insurancef.png" alt="Company 1" />
          <img src="https://cdn.logojoy.com/wp-content/uploads/2018/07/30125037/insurance2.png" alt="Company 2" />
          <img src="https://cdn.logojoy.com/wp-content/uploads/2018/07/30125045/insurance12.png" alt="Company 3" />
          <img src="https://cdn.logojoy.com/wp-content/uploads/2018/07/30125042/insurance6.png" alt="Company 4" />
          <img src="https://cdn.logojoy.com/wp-content/uploads/2018/07/30125038/insurance4.png" alt="Company 5" />
          {/* Repeat logos for continuous effect */}
          <img src="https://cdn.logojoy.com/wp-content/uploads/2018/07/30124949/insurancef.png" alt="Company 1" />
          <img src="https://cdn.logojoy.com/wp-content/uploads/2018/07/30125037/insurance2.png" alt="Company 2" />
          <img src="https://cdn.logojoy.com/wp-content/uploads/2018/07/30125045/insurance12.png" alt="Company 3" />
          <img src="https://cdn.logojoy.com/wp-content/uploads/2018/07/30125042/insurance6.png" alt="Company 4" />
          <img src="https://cdn.logojoy.com/wp-content/uploads/2018/07/30125038/insurance4.png" alt="Company 5" />
          <img src="https://cdn.logojoy.com/wp-content/uploads/2018/07/30124949/insurancef.png" alt="Company 1" />
          <img src="https://cdn.logojoy.com/wp-content/uploads/2018/07/30125037/insurance2.png" alt="Company 2" />
          <img src="https://cdn.logojoy.com/wp-content/uploads/2018/07/30125045/insurance12.png" alt="Company 3" />
          <img src="https://cdn.logojoy.com/wp-content/uploads/2018/07/30125042/insurance6.png" alt="Company 4" />
          <img src="https://cdn.logojoy.com/wp-content/uploads/2018/07/30125038/insurance4.png" alt="Company 5" />
          <img src="https://cdn.logojoy.com/wp-content/uploads/2018/07/30124949/insurancef.png" alt="Company 1" />
          <img src="https://cdn.logojoy.com/wp-content/uploads/2018/07/30125037/insurance2.png" alt="Company 2" />
          <img src="https://cdn.logojoy.com/wp-content/uploads/2018/07/30125045/insurance12.png" alt="Company 3" />
          <img src="https://cdn.logojoy.com/wp-content/uploads/2018/07/30125042/insurance6.png" alt="Company 4" />
          <img src="https://cdn.logojoy.com/wp-content/uploads/2018/07/30125038/insurance4.png" alt="Company 5" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
