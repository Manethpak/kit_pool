import axios from 'axios';

axios.defaults.baseURL = 'https://kitquizappapi.herokuapp.com/api/users';

export default class PostService {
    getUser() {
        return axios.get('');
    }

    insertUser(user) {
        return axios.post('', user);
    }

    deleteUser(id) {
        return axios.delete(`/${id}`);
    }
}