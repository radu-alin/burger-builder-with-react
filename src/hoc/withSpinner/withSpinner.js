// import Spinner from '../../components/UI/Spinner/Spinner';

const withSpinner = (WrappedComponent) => ({ loading, ...otherProps }) => {
  console.log('[withSpinner]');
  return loading ? null : <WrappedComponent {...otherProps} />;
};

export default withSpinner;
