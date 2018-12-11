import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.scss';

import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Row>
            <Col sm="2">
              <h3>Assigments</h3>
            </Col>
            <Col sm="10">Hello</Col>
          </Row>
        </Container>
      </Router>
    );
  }
}

export default App;
