export const userNameValidator = value => {
  if (typeof value === 'undefined' || value === null || value === '') {
    return true
  }
  return /^[a-zA-Zа-яА-Я\s\-]+$/.test(value) ? true : false
}

export const phoneValidator = value => {
  if (typeof value === 'undefined' || value === null || value === '') {
    return true
  }
  return /^\+?(?:[()-]*\d){1,11}[()-]*$/.test(value) ? true : false
}