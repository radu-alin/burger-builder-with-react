import './NavigationItem.scss';

const NavigationItem = ({ children, link, active }) => {
  const classes = active ? 'active' : null;
  return (
    <li className="navigation-item">
      <a href={link} className={classes}>
        {children}
      </a>
    </li>
  );
};

export default NavigationItem;
