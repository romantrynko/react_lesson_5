export default class UserService {
    async getUser() {
        
        return fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json());
            
    }
}
