const UserRepository = require('./../repository/UserRepository');

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async createUser(dadosUsuario) {
        return this.userRepository.createUser(dadosUsuario);
    }

    async getUserByCredentials(email, senha) {
        return this.userRepository.getUserByCredentials(email, senha);
    }

    async getUserById(id) {
        return this.userRepository.getUserById(id);
    }

    async updateUser(id, updatedUserData) {
        return this.userRepository.updateUser(id, updatedUserData);
    }

    async deleteUser(id) {
        return this.userRepository.deleteUser(id);
    }

    async getAllUsers() {
        console.log('teste getAllUsers', this.userRepository.getAllUsers());
        return this.userRepository.getAllUsers();
    }
}

module.exports = UserService;
