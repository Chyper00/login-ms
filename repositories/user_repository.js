const User = require('../model/user');

class userRepository {
  async createSimpleRegister(email, password) {
    const user = await User.create({
      email: email,
      password: password,
    });

    return user;
  }

  async createRegister(first_name, last_name, email, encryptedPassword) {
    const user = await User.create({
      first_name,
      last_name,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: encryptedPassword,
    });

    return user;
  }

  async getUser(email) {
    const user = await User.findOne({ email });

    return user;
  }


}

module.exports = userRepository