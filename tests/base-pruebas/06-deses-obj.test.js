import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en 06-deses-obj', () => { 
    
    test('usContext debe retornar un objeto', () => { 
        
        const clave = 123321;
        const edad = 24;
        
        const testContext = {
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        }
        
        const context = usContext({ clave, edad}) ;
        
        expect( context ).toEqual( testContext );
        
        console.log(context);
        console.log(testContext);
    })
    
});