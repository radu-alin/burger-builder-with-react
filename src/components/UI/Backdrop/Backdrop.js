import './Backdrop.scss';

const Backdrop = ({ show, disableModal }) =>
  show ? <div className="backdrop" onClick={disableModal}></div> : null;

export default Backdrop;
