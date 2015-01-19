/*############## TEST FUNCTIONS ##############*/

/*Saber conjugacion*/
function testConjugation(verbo) {
  QUnit.test(verbo, function(assert) {
    var conj = c.conjugacion(verbo);
    console.log(conj);
    assert.equal(conj, 'ar')
  })
}
testConjugation('cantar');

function testConjugation2(verbo) {
  QUnit.test(verbo, function(assert) {
    var conj = c.conjugacion(verbo);
    console.log(conj);
    assert.equal(conj, 'er')
  })
}
testConjugation2('temer');

function testRaiz(verbo) {
  QUnit.test(verbo, function(assert) {
    var raiz = c.raiz(verbo);
    assert.equal(raiz, 'cant')
  })
}

testRaiz('cantar');


function testBuscarRaiz(cadena, conjugacion) {
  QUnit.test([cadena, conjugacion], function(assert) {
    var raiz = c.conjugar(cadena, conjugacion);
    assert.equal(raiz, '1#presente#singular')
  })
}
testBuscarRaiz('o','ar');

function testBuscarRaiz2(cadena, conjugacion) {
  QUnit.test(cadena, function(assert) {
    var raiz = c.conjugar(cadena, 'ir');
    assert.equal(raiz, '2#condicional|simple#plural')
  })
}

testBuscarRaiz2('partiríais','ir');
