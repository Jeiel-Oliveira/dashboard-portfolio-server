import { Document } from 'mongoose';

export default interface IButton extends Document {
  name: string
  css: string
  text: string
}