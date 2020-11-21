import './Button.scss';

const Button = ({ children, type, onClickAction, disabled }) => {
  let classes = 'btn';
  if (type === 'less') {
    classes = 'btn less';
  }
  if (type === 'more') {
    classes = 'btn more';
  }

  return (
    <button className={classes} onClick={onClickAction} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
