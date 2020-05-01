/* eslint-disable no-underscore-dangle */
const Usuario = require('../model/usuario');
const Interesse = require('../model/interesse');

module.exports = {
  async store(req, res) {
    const usuario = await Usuario.findById(req.params.usuarioId);
    const interesse = await Interesse.findById(req.params.interesseId);

    if (!interesse) {
      return res.status(400).json({ error: 'Interesse não existe' });
    }

    usuario.interesses.push(interesse._id);

    await usuario.save();

    return res.json(usuario);
  },
};
