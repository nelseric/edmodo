import React from 'react';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as AssignmentActions from '../actions/assignments';

import AssignmentForm from './forms/AssignmentForm';

class CreateAssignment extends React.Component {
  closeModal = () => this.props.history.push('/');

  onSubmit = assignment => {
    assignment.id = 1;

    this.props.createAssignment(assignment);

    this.props.history.push(`/${assignment.id}`);
  };

  render() {
    return (
      <div className="modal is-active">
        <div className="modal-background" onClick={this.closeModal} />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Create Assignment</p>
            <button className="delete" aria-label="close" onClick={this.closeModal} />
          </header>
          <section className="modal-card-body">
            <AssignmentForm onSubmit={this.onSubmit} />
          </section>
        </div>
      </div>
    );
  }
}
export default connect(
  () => ({}),
  AssignmentActions
)(withRouter(CreateAssignment));
