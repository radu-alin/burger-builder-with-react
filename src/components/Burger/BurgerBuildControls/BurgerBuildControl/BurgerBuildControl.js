import './BurgerBuildControl.scss';

import Button from '../../../UI/Button/Button';

const BurgerBuildControl = ({
  label,
  lessButtonDisabled,
  ingAdd,
  ingRemove,
}) => (
  <div className="build-control">
    <div classes="label">{label}</div>
    <div>
      <Button
        type="brown-light"
        onClickAction={ingRemove}
        disabled={lessButtonDisabled}
      >
        Less
      </Button>
      <Button type="brown-dark" onClickAction={ingAdd} disabled={false}>
        More
      </Button>
    </div>
  </div>
);

export default BurgerBuildControl;
