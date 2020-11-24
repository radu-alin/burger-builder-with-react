import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-react-37b35.firebaseio.com/',
});

export default instance;
