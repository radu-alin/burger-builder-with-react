import axios from 'axios';

export const axiosFirebaseData = axios.create({
  baseURL: 'https://burger-builder-react-37b35.firebaseio.com',
  validateStatus: function (status) {
    return status >= 200 && status < 300; // default
  },
});

export const axiosFirebaseAuth = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1',
});
