import React from 'react';
import PropTypes from 'prop-types';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const AssignmentSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  due: Yup.date().required('Required'),
  description: Yup.string().required('Required'),
});

class AssignmentForm extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  render() {
    return (
      <Formik
        initialValues={{ title: '', due: '', description: '' }}
        validationSchema={AssignmentSchema}
        onSubmit={this.props.onSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="field">
              <label htmlFor="title" className="label">
                Title
              </label>

              <div className="control">
                <Field className="input" name="title" />
              </div>

              {errors.title && touched.title ? (
                <p className="help is-danger">{errors.title}</p>
              ) : null}
            </div>

            <div className="field">
              <label htmlFor="due" className="label">
                Due
              </label>

              <div className="control">
                <Field className="input" name="due" type="date" />
              </div>

              {errors.due && touched.due ? <p className="help is-danger">{errors.due}</p> : null}
            </div>

            <div className="field">
              <label htmlFor="description" className="label">
                Description
              </label>

              <div className="control">
                <Field className="textarea" name="description" component="textarea" />
              </div>

              {errors.description && touched.description ? (
                <p className="help is-danger">{errors.description}</p>
              ) : null}
            </div>

            <button className="button is-primary" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    );
  }
}

export default AssignmentForm;
