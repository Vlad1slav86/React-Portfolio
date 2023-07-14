import React, { useState } from 'react';
import './Contact.css';
import './style.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleBlur = (field) => {
    setTouched((prevTouched) => ({ ...prevTouched, [field]: true }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = {};

    if (!name.trim()) {
      validationErrors.name = 'Name is required';
    }

    if (!email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = 'Invalid email address';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted successfully');
      // Perform form submission logic here
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            onBlur={() => handleBlur('name')}
            className={touched.name && !name.trim() ? 'error' : ''}
          />
          {touched.name && !name.trim() && <span className="error">Name is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            onBlur={() => handleBlur('email')}
            className={touched.email && (!email.trim() || !/\S+@\S+\.\S+/.test(email)) ? 'error' : ''}
          />
          {touched.email && !email.trim() && <span className="error">Email is required</span>}
          {touched.email && email.trim() && !/\S+@\S+\.\S+/.test(email) && (
            <span className="error">Invalid email address</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            onBlur={() => handleBlur('message')}
            className={touched.message && !message.trim() ? 'error' : ''}
          ></textarea>
          {touched.message && !message.trim() && <span className="error">Message is required</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
