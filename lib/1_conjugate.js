var c = {
  conjugar : function(cadena, conjugacion) {
    if (cadena.length == 0) return 'not found';
    for (var tiempoVerbal in regular[conjugacion]) {
      for (var verbo in regular[conjugacion][tiempoVerbal]) {
        if (cadena === verbo) {
          return regular[conjugacion][tiempoVerbal][verbo];
        };
      };
    };
     return c.conjugar(cadena.slice(1,cadena.length), conjugacion);
  },

  raiz : function(verbo, desinencia) {
    return verbo.slice(0, verbo.length - desinencia.length);
  },

  conjugacion : {
    'ar' : 'Primera Conjugación',
    'er' : 'Segunda Conjugación',
    'ir' : 'Tercera Conjugación'
  },

  parse : function(desinenciaConjugacion, tiempoVerbal, desinencia, verbo) {
    var datos = regular[desinenciaConjugacion][tiempoVerbal][desinencia].split('#');

    var resultado = c.conjugacion[desinenciaConjugacion] + ', ' +
                    datos[0] + 'ª Persona del ' +
                    datos[2] + ', ' +
                    datos[1] + ' de ' + tiempoVerbal + '. ';
    if (verbo) resultado += 'Verbo' + c.raiz(verbo,desinencia) + desinenciaConjugacion;
    return resultado;
  }
}
