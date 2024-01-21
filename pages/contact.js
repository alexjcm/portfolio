import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import styles from '../components/contact/Contact.module.css';
import { validateEmail } from '../components/utils/util';
import AlertMessage from '../components/contact/AlertMessage';

import logger from '../logger/logger'

function Contact() {
  const { t } = useTranslation('contact');

  const [buttonText, setButtonText] = useState(t('submit'));
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

    setButtonText(t('submitting'));

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
        setButtonText(t('submit'));
      })
  };

  return (
    <Container className={styles.contactSection}>
      <h4 className={styles.contactInfo}>{t('sendEmail')}</h4>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="inputName">
          <div className={styles.floatLabel}>
            <Form.Control type="text"
              onChange={(e) => handleNameChange(e.target.value)}
              required
              aria-label="Your name" />
            <label htmlFor="inputName" className={nameIsActive ? 'Active' : ''}>
              {t('yourName')}
            </label>
            <Form.Control.Feedback type="invalid">{t('enterName')}</Form.Control.Feedback>
          </div>
        </Form.Group>
        <Form.Group controlId="inputEmail">
          <div className={styles.floatLabel}>
            <Form.Control
              required
              type="email"
              onChange={(e) => handleEmailChange(e.target.value)}
              aria-label="Your email"
            />
            <label htmlFor="inputEmail" className={emailIsActive ? 'Active' : ''}>
              {t('email')}
            </label>
            <Form.Control.Feedback type="invalid">{t('enterEmail')}</Form.Control.Feedback>
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
              aria-label="Your message"
            />
            <label htmlFor="inputMessage" className={messageIsActive ? 'Active' : ''}>
              {t('message')}
            </label>
            <Form.Control.Feedback type="invalid">{t('enterMessage')}</Form.Control.Feedback>
          </div>
        </Form.Group>
        <Button
          disabled={name && email && validateEmail(email) && message ? false : true}
          variant="info"
          type="submit"
          aria-label="Submit"
        >
          {buttonText}
        </Button>
        {showAlert && (
          <AlertMessage variant={paramsAlert.variant} message={paramsAlert.message} dismissible={paramsAlert.dismissible} onClose={() => setShowAlert(false)} />
        )}
      </Form>
    </Container>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en-US', [
      'common',
      'contact',
    ])),
  },
});

export default Contact;
