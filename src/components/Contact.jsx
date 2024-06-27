import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from 'react-bootstrap';
import '../../src/style.css'

const Form = () => {
  const form = useRef();
  const dialog = useRef();

  const handleSendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_xl0h95l',
        'template_eb9p9ak',
        form.current,
        '0QTVHDYLJo07_N3Hk'
      )
      .then(
        (result) => {
          console.log(result.text);
          document.forms['form'].reset();
          dialog.current.showModal();
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  const closeHandler = () => {
    dialog.current.close();
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="container-form">
        <dialog className="dialog" ref={dialog}>
          <Button variant="secondary" type="button" onClick={closeHandler}>
            X
          </Button>
          <p>Votre message a bien été envoyé.</p>
        </dialog>
        <form name="form" className="form" ref={form} onSubmit={handleSendEmail}>
          <div className="mb-3">
            <label className="form-label" htmlFor="lastname">
              Nom
            </label>
            <input
              className="form-control"
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Votre nom"
              required
              onInvalid={(e) => e.target.setCustomValidity('Veuillez entrer votre nom')}
              onInput={(e) => e.target.setCustomValidity('')}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="firstname">
              Prénom
            </label>
            <input
              className="form-control"
              type="text"
              id="firstname"
              name="firstname"
              placeholder="Votre prénom"
              required
              onInvalid={(e) => e.target.setCustomValidity('Veuillez entrer votre prénom')}
              onInput={(e) => e.target.setCustomValidity('')}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              className="form-control"
              type="email"
              id="email"
              name="email"
              placeholder="Votre email"
              required
              onInvalid={(e) => e.target.setCustomValidity('Veuillez entrer votre adresse email')}
              onInput={(e) => e.target.setCustomValidity('')}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              placeholder="Votre message"
              required
              onInvalid={(e) => e.target.setCustomValidity('Veuillez entrer votre message')}
              onInput={(e) => e.target.setCustomValidity('')}
              rows="10"
            />
          </div>
          <Button variant="primary" type="submit">
            Envoyer
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Form;