import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import * as AssignmentActions from '../actions/assignments';

import Inspector from 'react-inspector';

class Submissions extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        assignmentId: PropTypes.string,
      }),
    }),
  };

  componentDidMount() {
    if (this.props.assignment) {
      this.loadSubmissions();
    }
  }

  componentDidUpdate(oldProps) {
    if (!oldProps.assignment || this.props.assignment.id !== oldProps.assignment.id) {
      this.loadSubmissions();
    }
  }

  loadSubmissions() {
    this.props.fetchAssignmentSubmissions(this.props.assignment);
  }

  render() {
    return (
      <div>
        <h3>Submissions</h3>
        <Inspector data={this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const assignmentId = Number(props.match.params.assignmentId);
  return {
    assignment: state.assignments.find(assignment => assignment.id === assignmentId),
    submissions: state.assignment_submissions,
  };
};

export default connect(
  mapStateToProps,
  AssignmentActions
)(Submissions);
