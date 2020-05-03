const Usuario = require('../model/usuario');

module.exports = {
  async index(req, res) {
    const usuarios = await Usuario.find();

    return res.json(usuarios);
  },
  async store(req, res) {
    const { usuario } = req.body;
    const usuarioReq = req.body;

    const usuarioExistente = await Usuario.findOne({ usuario });

    if (usuarioExistente) {
      return res.json(usuarioExistente);
    }
    const user = await Usuario.create(usuarioReq);

    return res.json(user);
  },
  async editar(req, res) {
    const usuario = await Usuario.findById(req.params.id);

    usuario.set(req.body);

    const usuarioAtualizado = await usuario.save();

    return res.json(usuarioAtualizado);
  },
  async show(req, res) {
    const usuario = await Usuario.findById(req.params.id);

    return res.json(usuario);
  },
  async login(req, res) {
    const { usuario, senha } = req.body;

    const usuarioExistente = await Usuario.findOne({ usuario });

    if (usuarioExistente) {
      if (senha === usuarioExistente.senha) {
        return res.json({
          message: 'Login Ok!',
        });
      }
      return res.json({
        message: 'Senha Incorreta!',
      });
    }
    return res.json({ message: 'Usuario não existente' });
  },
};
