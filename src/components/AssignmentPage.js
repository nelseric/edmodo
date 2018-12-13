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
        <div className="tabs">
          <ul>
            <li>
              <NavLink exact to={`/${assignmentId}`} activeClassName="is-active">
                Assignment
              </NavLink>
            </li>
            <li>
              <NavLink exact to={`/${assignmentId}/submissions`} activeClassName="is-active">
                Submissions
              </NavLink>
            </li>
          </ul>
        </div>
        <Switch>
          <Route exact path="/:assignmentId" component={AssignmentDetail} />
          <Route path="/:assignmentId/submissions" component={Submissions} />
        </Switch>
      </div>
    );
  }
}

export default AssignmentPage;
