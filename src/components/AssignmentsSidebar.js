import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import moment from 'moment';

import './AssignmentsSidebar.scss';

class AssignmentsSidebar extends React.Component {
  static propTypes = {
    assignments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        description: PropTypes.string,
        due_at: PropTypes.string,
      })
    ),
  };

  render() {
    return (
      <div className="buttons">
        <NavLink to="/create" className="button is-fullwidth is-primary">
          Create Assignment
        </NavLink>
        {this.props.assignments.map(assignment => (
          <NavLink key={assignment.id} className="assignment" to={`/${assignment.id}`}>
            <strong>{assignment.title}</strong>
            <br />
            Due {moment(assignment.due_at).format('MMM Do, YYYY')}
          </NavLink>
        ))}
      </div>
    );
  }
}
export default AssignmentsSidebar;
