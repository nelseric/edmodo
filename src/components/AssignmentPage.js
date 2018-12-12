import React from 'react';
import PropTypes from 'prop-types';

import { Switch, Route, NavLink } from 'react-router-dom';

import AssignmentDetail from './AssignmentDetail';
import Submissions from './Submissions';

class AssignmentPage extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        assignmentId: PropTypes.string,
      }),
    }),
  };

  render() {
    const assignmentId = Number(this.props.match.params.assignmentId);

    return (
      <div>
        <nav className="nav nav-tabs">
          <NavLink exact className="nav-link" to={`/${assignmentId}`}>
            Assignment
          </NavLink>
          <NavLink exact className="nav-link" to={`/${assignmentId}/submissions`}>
            Submissions
          </NavLink>
        </nav>
        <Switch>
          <Route exact path="/:assignmentId" component={AssignmentDetail} />
          <Route path="/:assignmentId/submissions" component={Submissions} />
        </Switch>
      </div>
    );
  }
}

export default AssignmentPage;
