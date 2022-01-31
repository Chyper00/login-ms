const singUpUseCase = require('./use_cases/sing_up');
const loginUseCase = require('./use_cases/login');

class routes {

  async routeHealth(req, res) {
    res.status(200).send('ok');
  }

  async routeWelcome(req, res) {
    res.status(200).send('Welcome 🙌');
  }

  async routeSimpleRegister(req, res) {
    const { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).send('All input is required');
    }

    const user = await new singUpUseCase().singUpSimpleRegister(email, password);
    res.status(201).json(user);
  }

  async routeRegister(req, res) {
    try {
      const { first_name, last_name, email, password } = req.body;
      if (!(email && password && first_name && last_name)) {
        res.status(400).send('All input is required');
      }

      const user = await new singUpUseCase().singUpRegister(first_name, last_name, email, password);

      if (user) {
        res.status(201).json(user);
      } else {
        res.status(409).send('User Already Exist. Please Login');
      }

    } catch (err) {
      console.log(err);
    }
  }

  async routeLogin(req, res) {
    try {
      const { email, password } = req.body;
      if (!(email && password)) {
        res.status(400).send('All input is required');
      }

      const userValidLogin = await new loginUseCase().login(email, password);
      if (userValidLogin) {
        res.status(200).json(userValidLogin);
      } else {
        res.status(400).send('Invalid Credentials');
      }

    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = routes