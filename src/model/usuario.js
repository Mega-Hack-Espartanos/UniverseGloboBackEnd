/* eslint-disable comma-dangle */
const { Schema, model } = require('mongoose');

const UsuarioSchema = new Schema(
  {
    nome: {
      type: String,
      require: true,
    },
    usuario: {
      type: String,
      require: true,
    },
    senha: {
      type: String,
      require: true,
    },
    interesses: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Interesse',
      },
    ],
  },
  {
    timestamps: true,
  }
);
module.exports = model('Usuario', UsuarioSchema);
