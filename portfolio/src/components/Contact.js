import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Prepare the form data
    const formData = {
      name,
      email,
      message,
    };
  
    // Make an API call to submit the form data
    fetch('/api/submit-contact-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          // Form submission successful
          setFormSubmitted(true);
        } else {
          // Form submission failed
          console.log('Form submission failed.');
        }
      })
      .catch((error) => {
        console.log('An error occurred while submitting the form:', error);
      });
  };
  

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      {!formSubmitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="form-submitted-message">
          Thank you for your message! I'll get back to you soon.
        </div>
      )}
    </section>
  );
};

export default Contact;
