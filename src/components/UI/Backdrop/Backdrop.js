import './Backdrop.scss';

const Backdrop = ({ children, show, onClickAction }) =>
  show ? (
    <div className="backdrop" onClick={onClickAction}>
      {children}
    </div>
  ) : null;

export default Backdrop;
