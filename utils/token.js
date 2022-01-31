const jwt = require('jsonwebtoken');

class tokenGenerator {
  createToken(user) {
    return jwt.sign({ user_id: user._id, email: user.email }, 'CC1BC738BDE505313ABE6CD1D886491CB60C817717A26C5AE87C69EE2ED52676', {
      expiresIn: '2h',
    });
  }

  verifyToken(token) {
    return jwt.verify(token, 'CC1BC738BDE505313ABE6CD1D886491CB60C817717A26C5AE87C69EE2ED52676');
  }
}

module.exports = tokenGenerator