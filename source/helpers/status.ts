import HttpStatus from 'http-status-codes';
import { Request, Response } from 'express';

import log from './log';
import format from './format';

// Error 500
const { INTERNAL_SERVER_ERROR } = HttpStatus
const error = async(file:string, request: Request, response: Response, exception?: Error | null, message: string = 'No message', content?: object) => {
  await log(file, request, exception, message)
  return response.status(INTERNAL_SERVER_ERROR).json({
    code: INTERNAL_SERVER_ERROR, status: "INTERNAL_SERVER_ERROR",
    message: format.capitalize(message),
    success: false,
    technical: exception,
    ...content
  })
}

// Error 503 unavbailable
const { SERVICE_UNAVAILABLE } = HttpStatus
const notWorking = async (file: string, request: any, response: Response, exception: Error | null = Error('No error'), message?: string, content?: any) => {
  message = message || "Não foi possível realizar a solicitação! Tente novamente mais tarde."
  await log(file, request, exception, message)
  return response.status(SERVICE_UNAVAILABLE).json({
    code: SERVICE_UNAVAILABLE, status: "SERVICE_UNAVAILABLE",
    message: format.capitalize(message),
    success: false,
    technical: exception,
    ...content
  })
}


const { BAD_REQUEST } = HttpStatus
const badRequest = (response: Response, message?: string, content?: object) => {
  message = message || "Requisição malformada!"
  return response.status(BAD_REQUEST).json({
    code: BAD_REQUEST, status: "BAD_REQUEST",
    message: format.capitalize(message),
    success: false,
    ...content
  })
}

const { UNPROCESSABLE_ENTITY } = HttpStatus
const unprocessableEntity = (response: Response, message?: string, content?: object) => {
  message = message || "Conteúdo da requisição inválido!"
  return response.status(UNPROCESSABLE_ENTITY).json({
    code: UNPROCESSABLE_ENTITY,
    message: format.capitalize(message),
    success: false,
    ...content
  })
}

// Error 409
const { CONFLICT } = HttpStatus
const conflict = (response: Response, message?: string, content?: object) => {
  message = message || "Um ou mais campos únicos já estão cadastrados!"
  return response.status(CONFLICT).json({
    code: CONFLICT, status: 'CONFLICT',
    message: format.capitalize(message),
    success: false,
    ...content
  })
}

// Error 404 (not found)
const { NOT_FOUND } = HttpStatus
const notFound = (response: Response, message?: string, content?: object) => {
  message = message || "Registro não encontrado."
  return response.status(NOT_FOUND).json({
    code: NOT_FOUND, status: 'NOT_FOUND',
    message: format.capitalize(message),
    success: false,
    ...content
  })
}

// Error 401 (authentication)
const { UNAUTHORIZED } = HttpStatus
const unauthorized = (response: Response, message?: string, content?: object) => {
  message = message || "Não autorizado."
  return response.status(UNAUTHORIZED).json({
    code: UNAUTHORIZED, error: 'UNAUTHORIZED',
    message: format.capitalize(message),
    success: false,
    ...content
  })
}

// Create 201
const { CREATED } = HttpStatus
const created = (response: Response, message?: string, content?: object) => {
  return response.status(CREATED).json({
    code: CREATED, status: "CREATED",
    message: format.capitalize(message),
    success: true,
    ...content
  })
}

// Success 200
const { OK } = HttpStatus
const success = (response: Response, message?: string, content?: object) => {
  return response.status(OK).json({
    code: OK, status: "OK",
    message: format.capitalize(message),
    succes: true,
    ...content
  })
}

const status = {
  error,
  notWorking,
  badRequest,
  unprocessableEntity,
  conflict,
  notFound,
  unauthorized,
  created,
  success
}

export default status