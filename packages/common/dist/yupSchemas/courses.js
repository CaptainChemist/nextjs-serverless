import * as Yup from 'yup';
export const nameNotLongEnough = 'name is too short';
export const nameTooLong = 'name is too long';
export const descriptionNotLongEnough = 'description is too short';
export const descriptionTooLong = 'description is too long';
export const validCourseSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, nameNotLongEnough)
        .max(255, nameTooLong)
        .required(),
    description: Yup.string()
        .min(3, descriptionNotLongEnough)
        .max(255, descriptionTooLong)
        .required()
});
//# sourceMappingURL=courses.js.map