import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

import styles from '../components/contact/Contact.module.css';
import { validateEmail } from '../components/utils/util';
import AlertMessage from '../components/contact/AlertMessage';


import logger from '../logger/logger'

export default function Contact() {
  const [buttonText, setButtonText] = useState('Submit');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameIsActive, setNameIsActive] = useState(false);
  const [emailIsActive, setEmailIsActive] = useState(false);
  const [messageIsActive, setMessageIsActive] = useState(false);
  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [paramsAlert, setParamsAlert] = useState({
    variant: '',
    dismissible: '',
    message: ''
  });


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

  const configParamsAlert = (variant, message) => {
    setParamsAlert({
      ...paramsAlert,
      variant: variant,
      dismissible: true,
      message: message
    });

    setShowAlert(true);
  }

  const resetForm = (event) => {
    event.target.reset();
    setValidated(false);
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
      to: email,
      message: message,
    };

    event.preventDefault();

    setButtonText('Submitting...');

    // 02 Submit
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/mailer/sendMail`, {
      method: 'POST',
      body: JSON.stringify(bodyMsg),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        logger.info(response, 'response');
        if (response.status === 'success') {
          configParamsAlert('success', 'Message sent :)');
          resetForm(event);
        } else if (response.status === 'fail') {
          configParamsAlert('danger', 'Message failed to send :(');
        }
      })
      .catch((error) => {
        logger.error(error);
      }).finally(() => {
        setButtonText('Submit');
      })
  };

  return (
    <div className={styles.contactSection}>
      <h4 className={styles.contactInfo}>Feel free drop-in a mail here!</h4>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="inputName">
          <div className={styles.floatLabel}>
            <Form.Control type="text" onChange={(e) => handleNameChange(e.target.value)} required />
            <label htmlFor="inputName" className={nameIsActive ? 'Active' : ''}>
              Name
            </label>
            <Form.Control.Feedback type="invalid">Please enter a name.</Form.Control.Feedback>
          </div>
        </Form.Group>
        <Form.Group controlId="inputEmail">
          <div className={styles.floatLabel}>
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
          <div className={styles.floatLabel}>
            <Form.Control
              className={styles.inputTextarea}
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
          {buttonText}
        </Button>
        {showAlert && (
          <AlertMessage variant={paramsAlert.variant} message={paramsAlert.message} dismissible={paramsAlert.dismissible} onClose={() => setShowAlert(false)} />
        )}
      </Form>
    </div>
  );
}
