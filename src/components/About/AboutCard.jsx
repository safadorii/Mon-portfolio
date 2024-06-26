import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour, je suis <span className="purple">Safa dorii </span>
            <br />
            Passionnée par les nouvelles technologies. Après avoir terminé mes études en ingénierie agroalimentaire, j'ai décidé de me reconvertir professionnellement vers le développement web. Ce choix me permet de suivre ma passion pour la programmation et d'acquérir de nouvelles compétences.
            <br />
            <br />
            Pour approfondir mes connaissances dans le domaine du développement web, j'ai intégré la formation certifiante intégrateur web niveau Bac +2 d’OpenClassrooms. Au cours de cette formation, j'ai développé des compétences solides en HTML, CSS, JavaScript et React.
            <br />
            <br />
            Je suis particulièrement enthousiaste à l’idée d'explorer de nouvelles opportunités et de continuer à développer mes compétences dans le domaine du développement web, tout en cherchant à perfectionner celles que j'ai déjà acquises.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
