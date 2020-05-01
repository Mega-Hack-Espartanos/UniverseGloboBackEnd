const Interesse = require('../model/interesse');

module.exports = {
  async store(req, res) {
    const interesse = await Interesse.create(req.body);

    return res.json(interesse);
  },
  async index(req, res) {
    const interesses = await Interesse.find();

    return res.json(interesses);
  },
};
