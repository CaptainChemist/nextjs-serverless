import * as React from 'react';
import { Form, Input, Button, Switch, Upload, Icon } from 'antd';
import { withFormik, FormikErrors, FormikProps, Field } from 'formik';
import { validCourseSchema, coursesFieldArray } from '@next-serverless/common';
import { InputField } from './shared/InputField';
const FormItem = Form.Item;

interface FormValues {
  department: string;
  description: string;
  id: string;
  image: string;
  name: string;
  published: boolean;
  seoDescription: string;
  type: string;
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    const { values, handleChange, handleBlur, handleSubmit, touched, errors } = this.props;

    return (
      <div>
        <h1>Courses</h1>
        <form style={{ display: 'flex' }} onSubmit={handleSubmit}>
          {coursesFieldArray.map(({ name, type, typeModifier }) => {
            <Field name={name} placeholder={name} component={InputField} />;
          })}
          <FormItem>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </FormItem>
        </form>
      </div>
    );
  }
}

export const CourseAdminView = withFormik<Props, FormValues>({
  validationSchema: validCourseSchema,
  validateOnChange: false,
  // validateOnBlur: false,
  mapPropsToValues: props => ({
    department: '',
    description: '',
    id: '',
    image: '',
    name: '',
    published: false,
    seoDescription: '',
    type: ''
  }),
  handleSubmit: async (values, { setErrors, props }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(C);
