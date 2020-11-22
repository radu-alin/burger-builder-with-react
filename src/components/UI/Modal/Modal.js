import ReactDom from 'react-dom';

import Backdrop from '../Backdrop/Backdrop';

import Aux from '../../../hoc/Aux/Aux';

import './Modal.scss';

const Modal = ({ children, show, disableModal }) => {
  let classes = show ? 'modal show' : 'modal';

  return ReactDom.createPortal(
    <Aux>
      <Backdrop show={show} disableModal={disableModal} />
      <div className={classes}>
        <div className="modal-content">{children}</div>
      </div>
    </Aux>,
    document.getElementById('modal')
  );
};

export default Modal;
