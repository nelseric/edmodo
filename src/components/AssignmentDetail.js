import React from 'react';
import PropTypes from 'prop-types';

import Inspector from 'react-inspector';

class AssignmentDetail extends React.Component {
  static propTypes = {
    match: PropTypes.shape({ params: PropTypes.shape({ assignmentId: PropTypes.string }) }),
  };

  render() {
    return (
      <div>
        <Inspector data={this.props} />
      </div>
    );
  }
}

export default AssignmentDetail;
