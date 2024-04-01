import mongoose from "mongoose";

mongoose.Schema.Types.String.set("validate", {
  validator: (valor) => valor !== "",
  //   message: "Um campo em branco foi fornecido."
  message: ({ path }) => `O campo ${path} foi fornecido em branco.`
});