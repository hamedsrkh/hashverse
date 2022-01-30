import axios from "axios";

const baseUrl = 'https://api.polygon.io/v2'

const Axios = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-type": "application/json",
    },
});


Axios.defaults.params = {}
Axios.defaults.params['apiKey'] = process.env.REACT_APP_POLYGON_API_KEY

export default Axios

