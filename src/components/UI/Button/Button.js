import './Button.scss';

const Button = ({
  children,
  type,
  spacing,
  isWidth,
  onClickAction,
  disabled,
}) => {
  //type options: brown-light, brown-dark +  big
  //isWidth opstions: full
  //spacing options: my-1

  const classes = `btn ${type} ${spacing} ${isWidth}`;

  return (
    <button className={classes} onClick={onClickAction} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
