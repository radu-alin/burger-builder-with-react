import './BurgerBuildControl.scss';

import Button from '../../../UI/Button/Button';

const BurgerBuildControl = ({
  label,
  buttonLessDisabled,
  ingAdd,
  ingRemove,
}) => (
  <div className="build-control">
    <div classes="label">{label}</div>
    <div>
      <Button
        type="less"
        onClickAction={ingRemove}
        disabled={buttonLessDisabled}
      >
        Less
      </Button>
      <Button type="more" onClickAction={ingAdd} disabled={false}>
        More
      </Button>
    </div>
  </div>
);

export default BurgerBuildControl;
