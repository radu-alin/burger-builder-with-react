import { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';

import Aux from '../Aux/Aux';

const withErrorHandler = (WrappedComponent, axios) =>
  class extends Component {
    constructor() {
      super();
      this.state = {
        error: null,
      };

      this.axiosErrorHandler();
    }

    axiosErrorHandler = () => {
      this.reqInterceptor = axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });
      this.resInterceptor = axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ error: error });
        }
      );
    };

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    errorConfirmHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <Aux>
          <Modal
            show={this.state.error}
            disableModal={this.errorConfirmHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };

export default withErrorHandler;
