const mongoose = require("mongoose");

const schema = mongoose.Schema({
  Nomeproduto: {
    type: String,
    required: true,
  },

  categoria: {
    type: String,
    required: true,
    enum: ["Monitor", "Teclado", "Mouse"],
  },
  Tamanho: {
    type: String,
    required: true,
  },
  Peso: {
    type: String,
    required: true,
  },
  Cor: {
    type: String,
    required: true,
  },
  Pnp: {
    type: String,
    required: true,
    enum: ["Sim", "Nao"],
  },
  RGB: {
    type: String,
    required: true,
    enum: ["Sim", "Nao"],
  },
  bluetooth: {
    type: String,
    required: true,
    enum: ["Sim", "Nao"],
  },

  answered_at: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Perifericos", schema, "perifericos");
