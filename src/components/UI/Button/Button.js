import './Button.scss';

const Button = ({ children, type, spacing, onClickAction, disabled }) => {
  let classes = '';
  classes = `btn ${type}`;

  if (spacing) {
    classes = `${classes} ${spacing}`;
  }

  return (
    <button className={classes} onClick={onClickAction} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
