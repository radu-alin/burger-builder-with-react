import { memo, Fragment } from 'react';
import ReactDom from 'react-dom';

import Backdrop from '../Backdrop/Backdrop';

import './Modal.scss';

const Modal = ({ children, show, disableModal }) => {
  let classes = show ? 'modal show' : 'modal';

  return ReactDom.createPortal(
    <Fragment>
      <Backdrop show={show} onClickAction={disableModal} />
      <div className={classes}>
        <div className="modal-content">{children}</div>
      </div>
    </Fragment>,
    document.getElementById('modal')
  );
};

export default memo(Modal, (prevProps, nextProps) => {
  return (
    prevProps.children !== nextProps.children &&
    nextProps.show === prevProps.show
  );
});
