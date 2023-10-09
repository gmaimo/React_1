
describe('Pruebas en <DemoComponent />', () => { 
    test('esta prueba no debe fallar', () => {
        
        // 1. inicialización
        const message1 = 'Hola';
        
        // 2. estímulo
        const message2 = message1.trim();
        
        // 3. observar comportamiento
        expect (message1).toBe(message2);
        
    });
});

