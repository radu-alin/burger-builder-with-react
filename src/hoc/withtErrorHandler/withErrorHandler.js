import { useState, useEffect, useCallback, Fragment } from 'react';

import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
  const WithErrorHandler = (props) => {
    const [isError, setIsError] = useState({ isError: false, errorMsg: null });

    const reqInterceptor = axios.interceptors.request.use(
      (req) => req,
      (err) => setIsError({ isError: true, errorMsg: err.message })
    );
    const resInterceptor = axios.interceptors.response.use(
      (res) => res,
      (err) => setIsError({ isError: true, errorMsg: err.message })
    );

    useEffect(() => {
      return () => {
        axios.interceptors.request.eject(reqInterceptor);
        axios.interceptors.response.eject(resInterceptor);
      };
    }, [reqInterceptor, resInterceptor]);

    const disableErrorHandler = useCallback(() => {
      setIsError({ isError: false, errorMsg: null });
    }, []);

    return (
      <Fragment>
        {isError.isError ? (
          <Modal show={isError.isError} disableModal={disableErrorHandler}>
            {isError.errorMsg}
          </Modal>
        ) : null}
        <WrappedComponent {...props} />
      </Fragment>
    );
  };
  WithErrorHandler.displayName = `WithErorHandler(${getDisplayName(
    WrappedComponent
  )})`;
  return WithErrorHandler;
};

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default withErrorHandler;
