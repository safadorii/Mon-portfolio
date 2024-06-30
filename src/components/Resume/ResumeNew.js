import React from "react";
import { Container } from "react-bootstrap";

const ResumeViewer = () => {
  const pdfFile = process.env.PUBLIC_URL + "/Cv.pdf"; // Chemin vers votre fichier PDF

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Container fluid className="mt-5 flex-grow-1 d-flex flex-column justify-content-center">
        <div style={{ position: "relative", paddingTop: "56.25%", maxWidth: "100%" }}>
          <embed
            src={pdfFile}
            type="application/pdf"
            width="100%"
            height="100%"
            style={{ position: "absolute", top: 0, left: 0 }}
          />
        </div>
      </Container>
    </div>
  );
};

export default ResumeViewer;

