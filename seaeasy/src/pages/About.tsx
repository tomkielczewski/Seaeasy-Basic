import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { useNavigate } from "react-router";

export const About = () => {
  let navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Container className="about-container">
      <Row className="about-body">
        <Col>
          <h1>A little bit about me!</h1>
          <p>
            Aliquip amet reprehenderit duis esse ex sit excepteur mollit non qui
            commodo. Lorem velit consectetur elit cillum occaecat do tempor
            exercitation Lorem duis veniam. Esse excepteur non ut ea
            reprehenderit est dolore.
          </p>
          <p>
            Aliquip amet reprehenderit duis esse ex sit excepteur mollit non qui
            commodo. Lorem velit consectetur elit cillum occaecat do tempor
            exercitation Lorem duis veniam. Esse excepteur non ut ea
            reprehenderit est dolore.
          </p>
          <p>
            Aliquip amet reprehenderit duis esse ex sit excepteur mollit non qui
            commodo. Lorem velit consectetur elit cillum occaecat do tempor
            exercitation Lorem duis veniam. Esse excepteur non ut ea
            reprehenderit est dolore.
          </p>
          <p>
            Aliquip amet reprehenderit duis esse ex sit excepteur mollit non qui
            commodo. Lorem velit consectetur elit cillum occaecat do tempor
            exercitation Lorem duis veniam. Esse excepteur non ut ea
            reprehenderit est dolore.
          </p>
          <div className="back-next-button">
            <Button onClick={handleBack} variant="link">
              Back
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
