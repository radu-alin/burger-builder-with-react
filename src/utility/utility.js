const checkValidity = (value, rules) => {
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
};

export const renderInputs = (Element, data, setData) => {
  const updatedformInputsData = { ...data.formInputsData };

  const isValidFormHandler = (newData) => {
    let isValidForm = true;
    for (let key in newData) {
      isValidForm = newData[key].isValid && isValidForm;
    }
    return isValidForm;
  };

  const inputChangedHandler = (event, inputId) => {
    const updatedInput = {
      ...updatedformInputsData[inputId],
      value: event.target.value,
      isValid: checkValidity(
        event.target.value,
        data.formInputsData[inputId].validation
      ),
      isTouched: true,
    };

    updatedformInputsData[inputId] = updatedInput;
    const isFormValid = isValidFormHandler(updatedformInputsData);

    setData({
      ...data,
      formInputsData: {
        ...data.formInputsData,
        [inputId]: updatedInput,
      },
      isFormValid,
    });
  };

  const formElementsArray = [];
  for (let key in updatedformInputsData) {
    formElementsArray.push({
      id: key,
      config: updatedformInputsData[key],
    });
  }

  const inputs = formElementsArray.map((formEl) => {
    return (
      <Element
        key={formEl.id}
        label={formEl.config.label}
        elementType={formEl.config.elementType}
        value={formEl.config.value}
        isTouched={formEl.config.isTouched}
        isValid={formEl.config.isValid}
        shouldValidate={formEl.config.validation}
        onChangeAction={(event) => inputChangedHandler(event, formEl.id)}
        {...formEl.config.elementConfig}
      />
    );
  });

  return inputs;
};
