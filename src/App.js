import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Todos from './Components/Todos';

function App() {
  return (
    <Container className="my-5 text-center">
      <Row>
        <Col>
          <Todos />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
