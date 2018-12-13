import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import * as AssignmentActions from '../actions/assignments';

import { Route, Switch } from 'react-router-dom';

import AssignmentsSidebar from './AssignmentsSidebar';

import AssignmentPage from './AssignmentPage';

import SelectAnAssignment from './SelectAnAssignment';

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
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-one-quarter">
              <AssignmentsSidebar assignments={this.props.assignments} />
            </div>
            <div className="column">
              <Switch>
                <Route path="/:assignmentId" component={AssignmentPage} />
                <Route path="/" component={SelectAnAssignment} />≈
              </Switch>
            </div>
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
