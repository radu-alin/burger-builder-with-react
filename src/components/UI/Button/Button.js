import './Button.scss';

const Button = ({ children, type, spacing, onClickAction, disabled }) => {
  let classes = '';
  //type options: brown-light, brown-dark +  big
  classes = `btn ${type}`;

  //spacing options: my-1

  classes = spacing ? `${classes} ${spacing}` : `${classes}`;

  return (
    <button className={classes} onClick={onClickAction} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
