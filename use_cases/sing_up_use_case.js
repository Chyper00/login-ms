const userRepository = require('../repositories/user_repository.js');

class singUpuseCase {
    async singUp(email, password){
      if (!(email && password)) {
        res.status(400).send('All input is required');
      }
      const user = new userRepository().create(email, password);
      
      return user;
    }
  }

module.exports = singUpuseCase