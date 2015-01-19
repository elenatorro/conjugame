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

  conjugacion : function(verbo) {
    return verbo[verbo.length-2] + verbo[verbo.length-1];
  },

  raiz : function(infinitivo) {
    return infinitivo.slice(0, infinitivo.length-2);
  },

  tipo : {
    'ar' : 'primera conjugacion',
    'er' : 'segunda conjugacion',
    'ir' : 'tercera conjugacion'
  }
}
