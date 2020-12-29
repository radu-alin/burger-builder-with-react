import { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';

import { defaultState } from './state';
import { renderInputs } from '../../utility/utility';
import { auth } from '../../redux/actions/index';

import './AuthPage.scss';

const AuthPage = ({ isAuth, isLoading, isError, isBuilding, onAuth }) => {
  const [formData, setFormData] = useState({ ...defaultState });
  const [isNewAccount, setIsNewAccount] = useState(defaultState.isNewAccount);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const email = formData.formInputsData.email.value;
    const password = formData.formInputsData.password.value;
    onAuth(email, password, isNewAccount);
  };

  const switchAuthModeHandler = () => {
    setIsNewAccount(!isNewAccount);
  };

  const renderForm = () => {
    let form = (
      <Fragment>
        <section id="AuthForm" className="bg-brown-main">
          <div className="container py-2">
            <div className="auth-form py-2  bg-gray-main">
              <h3>Enter Data to - {isAuth ? 'Sign In' : 'Sign Up'}</h3>
              <p>{errorMessage}</p>
              <form>{renderInputs(Input, formData, setFormData)}</form>
              <div className="buttons my-2">
                <Button
                  type="brown-dark big"
                  spacing="my-1"
                  isWidth="full"
                  onClickAction={onSubmitHandler}
                  disabled={!formData.isFormValid}
                >
                  {!isNewAccount ? 'SignIN' : 'SignUP'}
                </Button>
                <Button
                  type="brown-dark big"
                  spacing="my-1"
                  isWidth="full"
                  onClickAction={switchAuthModeHandler}
                >
                  Switch to : {isNewAccount ? 'SignIN' : 'SignUP'}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );

    if (isLoading) {
      form = <Spinner center />;
    }

    if (isAuth) {
      form = isBuilding ? <Redirect to="/checkout" /> : <Redirect to="/" />;
    }

    return form;
  };

  const errorMessage = { isError } ? isError : null;

  return <main id="AuthPage">{renderForm()}</main>;
};

const mapStateToProps = ({
  auth: { token, isLoading, isError },
  burger: { isBuilding },
}) => ({
  isAuth: !!token,
  isError,
  isLoading,
  isBuilding,
});

const mapDispatchToProps = (dispatch) => ({
  onAuth: (email, password, isNewAccount) =>
    dispatch(auth(email, password, isNewAccount)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
