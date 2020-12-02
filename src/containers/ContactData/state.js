export const defaultState = {
  formInputsData: {
    name: {
      label: 'Name',
      elementType: 'input',
      value: '',
      elementConfig: {
        type: 'text',
        placeholder: 'Your Name',
      },
      validation: {
        isRequired: 'true',
      },
      isValid: false,
      isTouched: false,
    },
    email: {
      label: 'E-mail',
      elementType: 'input',
      value: '',
      elementConfig: {
        type: 'email',
        placeholder: 'Your E-Mail',
      },
      validation: {
        isRequired: true,
        isEmail: true,
      },
      isValid: false,
      isTouched: false,
    },
    street: {
      label: 'Street',
      elementType: 'input',
      value: '',
      elementConfig: {
        type: 'text',
        placeholder: 'Street',
      },
      validation: {
        isRequired: 'true',
      },
      isValid: false,
      isTouched: false,
    },
    postalCode: {
      label: 'Postal Code',
      elementType: 'input',
      value: '',
      elementConfig: {
        type: 'text',
        placeholder: 'Postal Code',
      },
      validation: {
        isRequired: true,
        isNumeric: true,
        isMinLength: 5,
        isMaxLength: 5,
      },
      isValid: false,
      isTouched: false,
    },
    deliveryMethod: {
      label: 'Delivery method',
      elementType: 'select',
      value: 'cheapest',
      validation: {},
      isValid: true,
      elementConfig: {
        options: [
          { value: 'cheapest', displayValue: 'Cheapest' },
          { value: 'fastest', displayValue: 'Fastest' },
        ],
        placeholder: 'Delivery Method',
      },
    },
  },
  isValidForm: false,
};
