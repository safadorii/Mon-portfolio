import React from "react";
import { Container } from "react-bootstrap";

const ResumeViewer = () => {
  const pdfFile = process.env.PUBLIC_URL + "/cv.pdf"; // Chemin vers votre fichier PDF

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Container className="mt-5 flex-grow-1 d-flex flex-column justify-content-center">
        <div style={{ maxWidth: "100%", height: "80vh" }}>
          <embed src={pdfFile} type="application/pdf" width="100%" height="100%" />
        </div>
      </Container>
    </div>
  );
};

export default ResumeViewer;