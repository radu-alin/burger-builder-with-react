import './BurgerBuildControl.scss';

import Button from '../../../UI/Button/Button';

const BurgerBuildControl = ({ label, buttonDisabled, ingAdd, ingRemove }) => {
  return (
    <div className="build-control">
      <div classes="label">{label}</div>
      <div>
        <Button
          type={'less'}
          onClickAction={ingRemove}
          disabled={buttonDisabled}
        >
          Less
        </Button>
        <Button type={'more'} onClickAction={ingAdd}>
          More
        </Button>
      </div>
    </div>
  );
};

export default BurgerBuildControl;
