import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';

describe('Pruebas en 09-promesas', () => { 
    
    test('getHeroeByIdAsync debe retornar un heroe', (done) => { 
        
        const id = 1;
        getHeroeByIdAsync( id )
            .then( hero => {
                expect( hero ).toEqual( {
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
                
                done();
        });

    });

    test('getHeroeByIdAsync debe dar error si heroe no existe', (done) => { 
        
        const id = 1;                   //el objetivo es caer en situacion de test
        getHeroeByIdAsync( id )
        .then( hero  => {               //si no entramos en fase prueba salta el error (no debe ser necesario este fragmento de codigo)
            expect( hero ).toBeFalsy();
            done();
        })
            .catch( error => {
                
                expect( error ).toBe(`No se pudo encontrar el héroe ${ id }`)
                
                done();
        });

    });
    
});