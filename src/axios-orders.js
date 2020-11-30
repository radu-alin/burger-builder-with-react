import axios from 'axios';

export const axiosFirebase = axios.create({
  baseURL: 'https://burger-builder-react-37b35.firebaseio.com',
  validateStatus: function (status) {
    return status >= 200 && status < 300; // default
  },
});
