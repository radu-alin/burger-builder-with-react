import burgerLogo from '../../assets/images/burger-logo.png';

import './Logo.scss';

const Logo = () => (
  <div id="Logo" className="logo bg-gray-main">
    <img src={burgerLogo} alt="BurgerLogo" />
  </div>
);

export default Logo;
