import React, {useState} from 'react';

import {Form, Button} from 'react-bootstrap';

import './Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  //const [subject, setSubject] = useState("");
  const [message, setMessage] = useState('');
  const [errorMessages, setErrorMessages] = useState([]);
  const [showErrors, setShowErrors] = useState(false);

  let errors = [];
  function ValidateEmail(email) {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  }

  const formValidation = () => {
    setErrorMessages([]);
    const isNameValid = name !== '';
    const isMessageValid = message !== '';

    if (!isNameValid) {
      errors.push('Name is not valid, please try again.');
    }
    if (!ValidateEmail(email)) {
      errors.push('Email is not valid, please try again.');
    }
    if (email === '') {
      errors.push('Email field is empty, please try again.');
    }
    if (!isMessageValid) {
      errors.push('Message is not valid, please try again.');
    }
    if (errors.length > 0) {
      setShowErrors({showErrors: true});
      setErrorMessages(errors);
    } else {
      setShowErrors({showErrors: false});
      alert('Email Sent');
    }
  };

  return (
    <div className="contact-section">
      <h2>
        Feel free to send an e-mail on alexjhcm@gmail.com <br />
        Alternatively, you can also drop-in a mail here!
      </h2>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setName({name: e.target.value})}
            placeholder="Enter name"
          />
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            onChange={(e) => setEmail({email: e.target.value})}
            placeholder="name@example.com"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="controlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            onChange={(e) => setMessage({message: e.target.value})}
            rows={3}
          />
        </Form.Group>
        {showErrors
          ? errorMessages.map((item, index) => {
              return <ul key={index}>{item}</ul>;
            })
          : null}
        <Button variant="primary" type="submit" onClick={formValidation}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Contact;
