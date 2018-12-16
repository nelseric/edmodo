import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

class Submissions extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        assignmentId: PropTypes.string,
      }),
    }),
    assignment: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string,
    }),
  };

  render() {
    const { assignment } = this.props;
    if (!assignment) {
      return null;
    }

    return (
      <div>
        <h1 className="title">{assignment.title}</h1>
        <p>{assignment.description}</p>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const assignmentId = Number(props.match.params.assignmentId);
  return {
    assignment: state.assignments.find(assignment => assignment.id === assignmentId),
  };
};

export default connect(mapStateToProps)(Submissions);
