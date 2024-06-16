function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  var numeroastring= num.toString();
  return  (numeroastring.length === 3);

}

module.exports = tieneTresDigitos;
