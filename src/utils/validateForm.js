export function validateAuthForms(formFields) {
  let isValid = true;

  for (const field in formFields) {
    const value = formFields[field].trim();
    if (!value) {
      isValid = false;
      return isValid;
    }
  }
  return isValid;
}
