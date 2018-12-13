import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import moment from 'moment';

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
        {this.props.assignments.map(assignment => (
          <NavLink
            key={assignment.id}
            className="button is-fullwidth"
            activeClassName="is-primary"
            to={`/${assignment.id}`}
          >
            {assignment.title} Due {moment(assignment.due_at).format('MMM Do, YYYY')}
          </NavLink>
        ))}
      </div>
    );
  }
}
export default AssignmentsSidebar;
