import React, { useState } from 'react';

import { Form, Button } from 'react-bootstrap';

import { validateEmail } from '../utils/util';
import './Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameIsActive, setNameIsActive] = useState(false);
  const [emailIsActive, setEmailIsActive] = useState(false);
  const [messageIsActive, setMessageIsActive] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleNameChange = (name) => {
    setName(name);
    name ? setNameIsActive(true) : setNameIsActive(false);
  };

  const handleEmailChange = (email) => {
    setEmail(email);
    email ? setEmailIsActive(true) : setEmailIsActive(false);
  };

  const handleMessageChange = (message) => {
    setMessage(message);
    message ? setMessageIsActive(true) : setMessageIsActive(false);
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  const handleSubmit = async (event) => {
    // 01 Validated
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);

    const bodyMsg = {
      name: name,
      from: email,
      html: message,
    };
    //event.preventDefault();
    // 02 Submit
    await fetch('http://localhost:5000/send-mail', {
      method: 'POST',
      body: JSON.stringify(bodyMsg),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log('response --> ', response);
        if (response.status === 'success') {
          alert('Message Sent.');
          resetForm();
        } else if (response.status === 'fail') {
          alert('Message failed to send!');
        }
      });
  };

  return (
    <div className="contact-section">
      <h4 className="contact-info">
        Feel free to send an e-mail on alexjhcm@gmail.com <br />
        Alternatively, you can also drop-in a mail here!
      </h4>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="inputName">
          <div className="float-label">
            <Form.Control type="text" onChange={(e) => handleNameChange(e.target.value)} required />
            <label htmlFor="inputName" className={nameIsActive ? 'Active' : ''}>
              Name
            </label>
            <Form.Control.Feedback type="invalid">Please enter a name.</Form.Control.Feedback>
          </div>
        </Form.Group>
        <Form.Group controlId="inputEmail">
          <div className="float-label">
            <Form.Control
              required
              type="email"
              onChange={(e) => handleEmailChange(e.target.value)}
            />
            <label htmlFor="inputEmail" className={emailIsActive ? 'Active' : ''}>
              Email
            </label>
            <Form.Control.Feedback type="invalid">Please enter your email.</Form.Control.Feedback>
          </div>
        </Form.Group>
        <Form.Group controlId="inputMessage">
          <div className="float-label">
            <Form.Control
              className="input-textarea"
              required
              as="textarea"
              onChange={(e) => handleMessageChange(e.target.value)}
              rows={4}
            />
            <label htmlFor="inputMessage" className={messageIsActive ? 'Active' : ''}>
              Message
            </label>
            <Form.Control.Feedback type="invalid">Please enter your message.</Form.Control.Feedback>
          </div>
        </Form.Group>
        <Button
          disabled={name && email && validateEmail(email) && message ? false : true}
          variant="info"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Contact;
