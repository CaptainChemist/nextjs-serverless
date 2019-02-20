import * as Yup from 'yup';
export declare const nameNotLongEnough = "name is too short";
export declare const nameTooLong = "name is too long";
export declare const descriptionNotLongEnough = "description is too short";
export declare const descriptionTooLong = "description is too long";
export declare const validCourseSchema: Yup.ObjectSchema<Yup.Shape<{}, {
    name: string;
    description: string;
}>>;
