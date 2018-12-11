import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

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
      <div>
        <h3>Assigments</h3>
        <ul>
          {this.props.assignments.map(assignment => (
            <li key={assignment.id}>
              <Link to={`/${assignment.id}`}>{assignment.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default AssignmentsSidebar;
