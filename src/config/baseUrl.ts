import axios from "axios";

const http = axios.create({
  baseURL:  'https://gorest.co.in/public/v2',
  headers:{
    Authorization: String(process.env.TOKEN_API_REST),
  }
})

export default http
