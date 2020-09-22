import mongoose from 'mongoose';

const { Schema, model } = mongoose
const { ObjectId } = Schema.Types

const LogObject = {

  file: {
    type: String,
    trim: true
  },

  userId: {
    type: ObjectId,
    ref: 'User'
  },

  exception: {
    type: String,
    trim: true,
    required: true
  },

  message: {
    type: String,
    trim: true
  }

}

const LogSchema = new Schema(LogObject, { timestamps: true })

export default model('Log', LogSchema)