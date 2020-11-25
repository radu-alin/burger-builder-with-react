import burgerLogo from '../../assets/images/burger-logo.png';

import './Logo.scss';

const Logo = ({ size }) => {
  //size options: small, large
  const classes = `logo bg-gray-main ${size}`;

  return (
    <div id="Logo" className={classes}>
      <img src={burgerLogo} alt="BurgerLogo" />
    </div>
  );
};

export default Logo;
