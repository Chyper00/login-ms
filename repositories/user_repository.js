const User = require('../model/user');

class userRepository {
    async create(email, password){
      const user = await User.create({
        email: email,
        password: password,
      });
  
      return user;
    }
}

module.exports = userRepository