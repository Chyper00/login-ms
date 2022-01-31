const bcrypt = require('bcryptjs');

class encryption {
  async encrypt(password) {
    return await bcrypt.hash(password, 10);
  }

  async validatePassword(password, encryptedPassword) {
    return await bcrypt.compare(password, encryptedPassword)
  }
}

module.exports = encryption