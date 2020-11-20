import './Button.scss';

const Button = ({ children, type, disabled }) => {
  let classes = 'btn';
  if (type === 'less') {
    classes = 'btn less';
  }
  if (type === 'more') {
    classes = 'btn more';
  }

  return <button className={classes}>{children}</button>;
};

export default Button;
