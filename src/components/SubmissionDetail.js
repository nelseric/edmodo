import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import moment from 'moment';

import './SubmissionDetail.scss';

class SubmissionDetail extends React.Component {
  static propTypes = {
    submission: PropTypes.shape({}),
  };

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  toggleExpanded = () => this.setState({ expanded: !this.state.expanded });

  render() {
    const {
      submission,
      submission: { creator },
    } = this.props;

    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image">
              <img src={creator.avatars.large} alt={creator.username} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>
                  {creator.first_name} {creator.last_name}
                </strong>
                <br />
                Turned In: {moment(submission.submitted_at).format('MMM Do, YYYY')}
              </p>
            </div>
          </div>
          <div className="media-right">
            <button className="button block" onClick={this.toggleExpanded}>
              {this.state.expanded ? 'Hide Submission' : 'Show Submission'}
            </button>
          </div>
        </article>

        <div className={classNames('submission-content', { hidden: !this.state.expanded })}>
          <p>{submission.content}</p>
        </div>
      </div>
    );
  }
}

export default SubmissionDetail;
