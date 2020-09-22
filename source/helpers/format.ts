import moment from 'moment'

const capitalize = (str: string): string | undefined => {
  return typeof(str === 'String') ? str.charAt(0).toUpperCase() + str.substring(1) : undefined
}

const format = {
  capitalize
}

export default format