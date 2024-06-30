import React, { useRef, useState } from 'react';
import { Form, Button, Alert, Container, Row, Col, Card } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import '../style.css'; 

const ContactUs = () => {
  const form = useRef();
  const [formMessage, setFormMessage] = useState(null);
  const [formError, setFormError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setFormMessage(null); 
    setFormError(null);   

    emailjs
      .sendForm('service_hgxwkmx', 'template_eb9p9ak', form.current, '0QTVHDYLJo07_N3Hk')
      .then(
        (result) => {
          console.log('Email successfully sent!', result.text);
          setFormMessage('Votre message a bien été envoyé.');
          form.current.reset();
          setTimeout(() => setFormMessage(null), 5000);
        },
        (error) => {
          console.error('Email sending failed:', error.text);
          setFormError('Une erreur est survenue. Veuillez réessayer plus tard.');
        }
      );
  };

  return (
    <div className="main-content d-flex justify-content-center align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card>
              <Card.Body>
                <h3 className="text-center mb-4">Contactez-moi</h3>
                {formMessage && <Alert variant="success">{formMessage}</Alert>}
                {formError && <Alert variant="danger">{formError}</Alert>}
                <Form ref={form} onSubmit={sendEmail}>
                  <Form.Group controlId="formName">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control type="text" name="user_name" placeholder="Entrez votre nom" required />
                  </Form.Group>

                  <Form.Group controlId="formEmail" className="mt-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="user_email" placeholder="Entrez votre email" required />
                  </Form.Group>

                  <Form.Group controlId="formMessage" className="mt-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" name="message" rows={4} placeholder="Entrez votre message" required />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="mt-3 w-100">
                    Envoyer
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;

