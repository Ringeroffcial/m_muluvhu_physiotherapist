import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Services', href: '#services' },
    { name: 'Book Appointment', href: '#contact' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'About Us', href: '#about' },
    { name: 'Patient Stories', href: '#stories' }
  ];

  const serviceLinks = [
    { name: 'Neuromuscular Pains', href: '#services' },
    { name: 'Chest Conditions', href: '#services' },
    { name: 'Fracture Rehabilitation', href: '#services' },
    { name: 'Pediatric Physio', href: '#services' },
    { name: "Women's Health", href: '#services' },
    { name: 'Sports Injuries', href: '#services' }
  ];

  const contactInfo = [
    { icon: '📍', text: '3384 Kagiso Avenue, Hillsview, 1754 || 16 Ockerse Street, Krugersdorp,1739' },
    { icon: '📞', text: '0837204431' },
    { icon: '💬', text: 'WhatsApp: +27 78 957 9310' },
    { icon: '✉️', text: 'khanyisaphysio@gmail.com' }
  ];

  const workingHours = [
    { day: 'Monday - Friday', time: '8:00 AM - 18:00 PM' },
    { day: 'Saturday', time: '9:00 AM - 14:00 PM' },
    { day: 'Sunday', time: 'Emergency Only' },
    { day: 'Public Holidays', time: 'By Appointment' }
  ];

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log('Newsletter subscription:', email);
    alert('Thank you for subscribing to our newsletter!');
    e.target.reset();
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-grid">
            
            <div className="footer-logo">
              <div className="footer-logo-main">
                <div className="footer-logo-icon">MM</div>
                <div className="footer-logo-text">
                  <h3>M Muluvhu's</h3>
                  <p>Physiotherapy</p>
                </div>
              </div>
              <p className="footer-description">
                Providing compassionate, professional physiotherapy care to help you 
                restore movement, reduce pain, and improve your quality of life.
              </p>
              
              <div className="footer-badges">
                <span className="footer-badge">HPCSA Registered</span>
                <span className="footer-badge">SASP Certified</span>
              </div>
            </div>

            <div className="footer-newsletter">
              <h4>Working Hours</h4>
              <ul className="working-hours">
                {workingHours.map((hours, index) => (
                  <li key={index} className="working-hour-item">
                    <span className="hour-day">{hours.day}</span>
                    <span className="hour-time">{hours.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-content">
            
            <div className="copyright">
              <p>©{currentYear} M Muluvhu Physiotherapy. All rights reserved.</p>
              <p>HPCSA Practice Number: 0989878</p>
            </div>

            <div className="footer-bottom-right">

              
              <button
                onClick={handleScrollToTop}
                className="back-to-top"
                aria-label="Back to top"
              >
                <span>↑</span>
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;