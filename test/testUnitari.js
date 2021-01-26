import assert from 'assert';
import {suma, creaArrayDe3} from '../src/js/operacions.mjs';

describe('Funció suma()',  function() {

    it('suma entre 2 numeros', () => {
        assert.strictEqual( suma(2,2), 4 )
        assert.strictEqual( suma(-5,55.05), 50.05 )
        //assert.strictEqual( suma(0,0), 1)
    })

    it('suma entre un nombre i no nombre retorna NaN', () => {
        assert.strictEqual( isNaN(suma(100, 'patata')), true )
        assert.strictEqual( isNaN(suma(100, {nom: 'John'})), true )
    })
});


describe('Funció creaArrayDe3()',  function() {
    it('creaArray retorna sempre un array', () => {
        assert.strictEqual( typeof creaArrayDe3(1,2,3), "object"  )
    })
})