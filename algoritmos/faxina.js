let user = {
    nome: 'matheus',
    idade: 20,
    altura: null
  }
  
function faxina(object) {
    for (const property in object) {
      if (object[property] === null) {
        delete object[property];
      }
  }
  return object
}
  
console.log(faxina(user))
  