import * as Yup from 'yup';

export const coursesFieldArray = [
  { name: 'department', type: 'string', min: 3, max: 255 },
  { name: 'description', type: 'string', min: 3, max: 255 },
  { name: 'id', type: 'string', min: 3, max: 255, typeModifier: 'id' },
  { name: 'image', type: 'string', min: 3, max: 255 },
  { name: 'name', type: 'string', min: 3, max: 255 },
  { name: 'published', type: 'boolean' },
  { name: 'seoDescription', type: 'string', min: 3, max: 255 },
  { name: 'type', type: 'string', min: 3, max: 255, typeModifier: 'image' }
];

const generateObj = fieldArray =>
  fieldArray.reduce((obj, { name, type, min, max }) => {
    let yupStr;
    switch (type) {
      case 'string':
        yupStr = Yup.string()
          .min(min, `${name} is too short`)
          .max(max, `${name} is too long`)
          .required();
        break;
      case 'boolean':
        yupStr = Yup.boolean().required();
        break;
    }

    return Object.assign(obj, {
      [name]: yupStr
    });
  }, {});

export const validCourseSchema = Yup.object().shape(generateObj(coursesFieldArray));

// try {
//   await validCourseSchema.validate(args, { abortEarly: false})
// } catch(err){
//   formatYupError(err)
// }
