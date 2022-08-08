import axios from "axios";

const http = axios.create({
  baseURL:  'https://gorest.co.in/public/v2',
  headers:{
    Authorization: 'f0f2719000af9a9ab0cce4bffd5b4931cbfb7422505c4d69e21740921af4dcb2',
  }
})

export default http
