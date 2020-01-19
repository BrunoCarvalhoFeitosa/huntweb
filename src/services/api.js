import Axios from 'axios';

//Library Axios, your function is work in client(Browser) or server(Node) through AJAX requests
const Api = Axios.create({
    baseURL: 'https://rocketseat-node.herokuapp.com/api'
});

export default Api;