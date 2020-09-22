import { Request, Response } from 'express';
import Log from './../models/Log';

const log = async(file: string, request: any, exception?:Error | null, message?: string) => {

  if(!exception) exception = Error('no-exception')
  if(!message) message = ""

  await Log.create({
    file,
    userId: request.userId,
    exception: String(exception),
    message
  })
}

export default log