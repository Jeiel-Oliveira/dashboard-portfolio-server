import HttpStatus from 'http-status-codes';
import { Request, Response } from 'express';
import extenso from 'extenso';

// Error 500
const { INTERNAL_SERVER_ERROR } = HttpStatus
const error = async(file:string, request: Request, response: Response, exception?: Error | null, message: string = 'No message', content?: object) => {
  await log
}