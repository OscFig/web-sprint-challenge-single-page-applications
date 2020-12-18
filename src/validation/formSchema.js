import * as yup from 'yup';

export default yup.object().shape({
    name: yup
        .string()
        .required('Name is required')
        .min(2, 'Name must be greater than 2 characters long'),
    special: yup
        .string(),
    size: yup
        .string()
        .oneOf(['small','medium','large'], 'size is required'),
    sauce: yup
        .string()
        .oneOf(['BBQ','Ranch'],'Please select a sauce'),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    pineapple: yup.boolean(),
    bacon: yup.boolean(),
})