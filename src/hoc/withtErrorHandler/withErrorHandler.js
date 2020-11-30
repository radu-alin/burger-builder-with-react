import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) =>
  class extends Component {
    constructor() {
      super();
      this.state = {
        isError: false,
        errorMsg: null,
      };

      this.axiosErrorHandler();
    }

    axiosErrorHandler = () => {
      this.reqInterceptor = axios.interceptors.request.use(
        (req) => req,
        (err) => this.setState({ isError: true, errorMsg: err.message })
      );
      this.resInterceptor = axios.interceptors.response.use(
        (res) => res,
        (err) => {
          this.setState({ isError: true, errorMsg: err.message });
        }
      );
    };

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    errorConfirmHandler = () => {
      this.setState({ isError: false, errorMsg: null });
    };

    render() {
      return (
        <React.Fragment>
          {this.state.isError ? (
            <Modal
              show={this.state.isError}
              disableModal={this.errorConfirmHandler}
            >
              {this.state.errorMsg}
            </Modal>
          ) : null}
          <WrappedComponent {...this.props} />
        </React.Fragment>
      );
    }
  };

export default withErrorHandler;
