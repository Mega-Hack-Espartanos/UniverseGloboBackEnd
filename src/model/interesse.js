/* eslint-disable comma-dangle */
const { Schema, model } = require('mongoose');

const InteresseSchema = new Schema(
  {
    nome: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = model('Interesse', InteresseSchema);
