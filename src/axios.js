import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-fbbc0/us-central1/api' //The api url (cloud function url)
});


export default instance;