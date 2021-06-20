import * as yup from 'yup';

export const validate = async (form) => {
  const schema = await yup.object().shape(
    {
      year: yup.string().required('Campo requerio'),
      brand: yup.string().required('Campo requerio'),
    },
  );

  try {
    const data = await schema.validate(form, { abortEarly: false });
    return { isValid: true, data, errors: {} };
  } catch (err) {
    const errors = {};
    if (err.inner) {
      err.inner.forEach((error) => {
        errors[error.path] = error.message;
      });
    }
    return { isValid: false, data: form, errors };
  }
};

export default validate;
