import mongoose from 'mongoose';

import IButton from '../interfaces/IButton';

interface IButtonModel extends mongoose.Model<IButton> {}

const ButtonObject = {

  name: {
    type: String,
    required: true
  },

  text: {
    type: String,
    required: true,
    default: "Editar"
  },

  css: {
    type: String,
    required: true
  }
}

const ButtonSchema: mongoose.Schema = new mongoose.Schema(
  ButtonObject, { timestamps: true }
)

export default mongoose.model<IButton, IButtonModel>('Button', ButtonSchema)