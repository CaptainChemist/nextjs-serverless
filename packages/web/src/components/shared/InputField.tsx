import * as React from 'react';
import { FieldProps } from 'formik';
import { Form, Input, Button, Switch, Upload, Icon } from 'antd';
const FormItem = Form.Item;

export const InputField: React.SFC<FieldProps<any> & { prefix: React.ReactNode }> = ({ field, form: { touched, errors }, ...props }) => {
  const errorMsg = touched[field.name] && errors[field.name];
  // if (typeModifier) {
  //   const imageUrl = `https://media.next-serverless.com/images/favicon/apple-icon-57x57.png`;

  //   return (
  //     <Upload
  //       key={name}
  //       name="avatar"
  //       listType="picture-card"
  //       className="avatar-uploader"
  //       showUploadList={false}
  //       // action="//jsonplaceholder.typicode.com/posts/"
  //       beforeUpload={e => console.log(e)}
  //       onChange={e => console.log(e)}
  //     >
  //       {imageUrl ? (
  //         <img src={imageUrl} alt="avatar" />
  //       ) : (
  //         <div>
  //           <Icon type="plus" />
  //           <div className="ant-upload-text">Upload</div>
  //         </div>
  //       )}
  //     </Upload>
  //   );
  // }
  //   switch (type) {
  //     case 'boolean':
  //       return (
  //         <FormItem key={name}>
  //           <Input type="checkbox" {...field} {...props} checked={values[name]} name={name} onChange={handleChange} />
  //         </FormItem>
  //       );

  //     case 'string':
  return (
    <FormItem help={errorMsg} validateStatus={errorMsg ? 'error' : undefined}>
      <Input {...field} {...props} />
    </FormItem>
  );
  //   }
};
