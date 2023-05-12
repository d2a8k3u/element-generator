import * as yup from 'yup';
import validateColor from 'validate-color';

yup.addMethod(yup.string, 'testColorValidation', function (errorMessage: string) {
  return this.test(`test-color-validation`, errorMessage, function (value) {
    const { path, createError } = this;

    if (!value) {
      return true;
    }

    return validateColor(value as string) || createError({ path, message: errorMessage });
  });
});

export default yup;
