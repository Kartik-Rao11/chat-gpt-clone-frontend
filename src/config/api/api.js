import Axios from "axios";

const axios = Axios.create({
    baseURL: 'https://chat-gpt-clone-backend-lurf.onrender.com'
  });
  
  export default axios;