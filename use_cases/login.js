const userRepository = require('../repositories/user_repository.js');
const encryption = require('../utils/encryption');
const tokenGenerator = require('../utils/token');

class loginUseCase {
  async login(email, password) {
    const user = await new userRepository().getUser(email);

    if (user && (await new encryption().validatePassword(password, user.password))) {
      const token = new tokenGenerator().createToken(user);
      user.token = token;

      return user
    }
  }
}

module.exports = loginUseCase