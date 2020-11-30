export function checkValidity(value, rules) {
  let isValid = true;
  if (!rules) {
    return true;
  }

  if (rules.isRequired) {
    isValid = value.trim() !== '' && isValid;
  }

  if (rules.isMinLength) {
    isValid = value.length >= rules.isMinLength && isValid;
  }

  if (rules.isMaxLength) {
    isValid = value.length <= rules.isMaxLength && isValid;
  }

  if (rules.isEmail) {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    isValid = pattern.test(value) && isValid;
  }

  if (rules.isNumeric) {
    const pattern = /^\d+$/;
    isValid = pattern.test(value) && isValid;
  }

  return isValid;
}
