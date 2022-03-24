import React from "react";
import { Container, Card, Row, Col, Button} from "react-bootstrap";


export const Home = () => {
  return (
    <div className="home-body">
    <Container>
      <Row className="home-main-row">
        <Col>
          <Card style={{ width: "800px" }}>
            <Card.Body>
              <Card.Text>
                <p>
                SeaEasy is currently under development. We are asking all watersports enthusiasts to fill out our survey that will help us make your...
                </p>
                <p>DREAMS COME TRUE!</p>
              </Card.Text>
              <Button variant="success">Fill out survey Support SeaEasy!</Button>{' '}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
};
