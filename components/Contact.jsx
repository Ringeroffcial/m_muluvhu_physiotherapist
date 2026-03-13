import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };

  // const handleSubmit = async (e) => { 
  //   e.preventDefault();
  //   setIsSubmitting(true);
    
  //   // Simulate form submission
  //   setTimeout(() => {
  //     console.log('Form submitted:', formData);
  //     setIsSubmitting(false);
  //     setSubmitMessage('Thank you! We will contact you within 24 hours.');
      
  //     // Reset form
  //     setFormData({
  //       name: '',
  //       email: '',
  //       phone: '',
  //       service: '',
  //       message: ''
  //     });
      
      
  //     setTimeout(() => setSubmitMessage(''), 5000);
  //   }, 1500);
  // };

  // Contact Information
  const contactDetails = [
    {
      id: 'whatsapp',
      title: 'WhatsApp Us',
      icon: '💬',
      color: 'whatsapp',
      details: [
        {
          label: 'Primary WhatsApp',
          value: '+27769349914',
          link: 'https://wa.me/27769349914?text=Hello%20Mphoo%20Muluvhu%20Physiotherapy%2C%20I%20would%20like%20to%20book%20an%20appointment',
          action: 'Chat Now'
        },
      ]
    },
    {
      id: 'email',
      title: 'Email Us',
      icon: '✉️',
      color: 'email',
      details: [
        {
          label: 'General Inquiries',
          value: 'muluvhumphoo@gmail.com',
          link: 'mailto:muluvhumphoo@gmail.com',
          action: 'Send Email'
        },
      ]
    },
    {
      id: 'address',
      title: 'Visit Us',
      icon: '📍',
      color: 'address',
      details: [
        {
          label: 'Crowthrone Midrand',
          value: '86 Whisken Avenue, Crowthrone Midrand,1684',
          link: 'https://www.google.com/maps/place/86+Whisken+Ave,+Crowthorne+AH,+Midrand,+1685/@-25.9819613,28.0814733,17z/data=!3m1!4b1!4m6!3m5!1s0x1e9571b724146e09:0x1e9a5441c0d6f862!8m2!3d-25.9819613!4d28.0840482!16s%2Fg%2F11j8gmmw46?entry=ttu&g_ep=EgoyMDI2MDMxMC4wIKXMDSoASAFQAw%3D%3D',
          action: 'Get Directions'
        }

      ]
    }
  ];
  const services = [
    'General Consultation',
    'Neuromuscularskeletal Pains',
    'Chest Conditions',
    'Fracture Rehabilitation',
    'Pediatric Physio',
    'Women\'s Health',
    'Other'
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <div className="contact-badge">
            <span className="badge-icon">📞</span>
            <span className="badge-text">We're Here to Help</span>
          </div>
          <h2>Contact <span>Muluvhu Physiotherapy</span></h2>
          <p>
            Get in touch with our team for appointments, inquiries, or emergency assistance. 
            We're committed to providing you with the best care.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Our Contact Details</h3>
            
            <div className="contact-cards">
              {contactDetails.map((contact) => (
                <div 
                  key={contact.id} 
                  className={`contact-card ${contact.color}`}
                >
                  <div className="contact-card-header">
                    <div className="contact-card-icon">{contact.icon}</div>
                    <h4>{contact.title}</h4>
                  </div>
                  
                  <div className="contact-details">
                    {contact.details.map((detail, index) => (
                      <div key={index} className="contact-detail-item">
                        <p className="contact-detail-label">{detail.label}</p>
                        <p className="contact-detail-value">{detail.value}</p>
                        {detail.link && detail.action && (
                          <a
                            href={detail.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="action-button"
                          >
                            <span className="action-icon">
                              {contact.id === 'whatsapp' ? '💬' : 
                               contact.id === 'phone' ? '📞' : 
                               contact.id === 'email' ? '✉️' : '📍'}
                            </span>
                            {detail.action}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* <div className="emergency-banner">
              <div className="emergency-header">
                <span className="emergency-icon">🚨</span>
                <h4>Emergency Assistance</h4>
              </div>
              <p>
                For urgent medical attention after hours, please use our emergency lines.
              </p>
              <div className="emergency-buttons">
                <a 
                  href="tel:+27119876543"
                  className="emergency-button"
                >
                  📞 Call Emergency: 0837204431
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;