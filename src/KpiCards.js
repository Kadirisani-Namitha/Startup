import React, { useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const KpiCards = () => {
  const [target, setTarget] = useState(100000);

  return (
    <>
      <Row className="mb-4">
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Total Revenue</Card.Title>
              <Card.Text>$98,000</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>New Customers</Card.Title>
              <Card.Text>230</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Revenue Target</Card.Title>
              <Card.Text>${target.toLocaleString()}</Card.Text>
              <input
                type="number"
                className="form-control"
                value={target}
                onChange={(e) => setTarget(Number(e.target.value))}
                placeholder="Set target"
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default KpiCards;
