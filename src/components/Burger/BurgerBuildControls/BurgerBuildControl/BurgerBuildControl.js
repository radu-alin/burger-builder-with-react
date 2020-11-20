import './BurgerBuildControl.scss';

import Button from '../../../UI/Button/Button';

const BurgerBuildControl = ({ label }) => {
  return (
    <div className="build-control">
      <div classes="label">{label}</div>
      <div>
        <Button type={'less'}>Less</Button>
        <Button type={'more'}>More</Button>
      </div>
    </div>
  );
};

export default BurgerBuildControl;
