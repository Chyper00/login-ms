const encryption = require('../utils/encryption');
const tokenGenerator = require('../utils/token');
const userRepository = require('../repositories/user_repository.js');

class singUpUseCase {
  async singUpSimpleRegister(email, password){
    const user = new userRepository().createSimpleRegister(email, password);
    return user;
  }

  async singUpRegister(first_name, last_name, email, password){
    const userRep = new userRepository();
    const oldUser = await userRep.getUser(email);
    if (oldUser) {
      return null
    }

    const encryptedPassword = await new encryption().encrypt(password);

    const user = await userRep.createRegister(first_name, last_name, email, encryptedPassword);

    const token = new tokenGenerator().createToken(user);
    user.token = token;

    return user;
  }
}

module.exports = singUpUseCase