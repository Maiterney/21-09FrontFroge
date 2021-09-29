import axios from "axios";

const api = axios.create({
  baseURL: "https://frontfroge2109.herokuapp.com/"
});


api.getInitialProps = async() => {
    const response = await axios.get({api});
    return{ dados : response};
    console.log(response)
  }

export default api;