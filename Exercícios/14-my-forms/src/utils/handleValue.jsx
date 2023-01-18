function validateNameEnd(name, value) {
  switch (name) {
  case 'name':
    return value.toUpperCase();
  case 'endereco':
    return value.replace(/[^\w\s]/g, '');
  default:
    return value;
  }
}

function validateEmail(name, value) {
  const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  return regex.test(value) || name !== 'email' ? undefined : 'Email inválido';
}

export {
  validateNameEnd,
  validateEmail,
};