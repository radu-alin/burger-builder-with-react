import './Input.scss';

const Input = ({
  label,
  elementType,
  value,
  onChangeAction,
  shouldValidate,
  isTouched,
  isValid,
  ...elementConfig
}) => {
  let inputElement = null;
  let classes = 'input-element';
  if (!isValid && shouldValidate && isTouched) {
    classes = 'input-element invalid';
  }

  const optionRender = (data) => {
    return data.map((el) => (
      <option key={el.value} value={el.value} onChange={onChangeAction}>
        {el.displayValue}
      </option>
    ));
  };

  switch (elementType) {
    case 'input':
      inputElement = (
        <input
          className={classes}
          value={value}
          onChange={onChangeAction}
          {...elementConfig}
        />
      );
      break;
    case 'select':
      inputElement = (
        <select className={classes} value={value} onChange={onChangeAction}>
          {optionRender(elementConfig.options)}
        </select>
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea
          className={classes}
          value={value}
          onChange={onChangeAction}
          {...elementConfig}
        />
      );
      break;
    default:
      inputElement = (
        <input
          className={classes}
          value={value}
          onChange={onChangeAction}
          {...elementConfig}
        />
      );
  }

  return (
    <div className="input">
      <label>{label}</label>
      {inputElement}
    </div>
  );
};

export default Input;
