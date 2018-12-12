import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Inspector from 'react-inspector';

class Submissions extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        assignmentId: PropTypes.string,
      }),
    }),
  };

  render() {
    return (
      <div>
        <h3>Assignment</h3>
        <Inspector data={this.props.assignment} />
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
