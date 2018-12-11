import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import * as AssignmentActions from '../actions/assignments';

import { Route } from 'react-router';

import { Container, Row, Col, Button } from 'reactstrap';
import AssignmentsSidebar from './AssignmentsSidebar';
import AssignmentDetail from './AssignmentDetail';

import './App.scss';

export class App extends Component {
  static propTypes = {
    fetchAssignments: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.fetchAssignments();
  }

  render() {
    return (
      <Container>
        <Row>
          <Col sm="2">
            <AssignmentsSidebar assignments={this.props.assignments} />
          </Col>
          <Col sm="10">
            <Route path="/:assignmentId" component={AssignmentDetail} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect(
  state => ({ assignments: state.assignments }),
  AssignmentActions
)(App);
