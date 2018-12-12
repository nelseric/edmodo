import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import * as AssignmentActions from '../actions/assignments';

import { Route } from 'react-router-dom';

import AssignmentsSidebar from './AssignmentsSidebar';

import AssignmentPage from './AssignmentPage';

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
      <div className="container">
        <div className="row">
          <div className="col-2">
            <AssignmentsSidebar assignments={this.props.assignments} />
          </div>
          <div className="col-10">
            <Route path="/:assignmentId" component={AssignmentPage} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({ assignments: state.assignments }),
  AssignmentActions
)(App);
