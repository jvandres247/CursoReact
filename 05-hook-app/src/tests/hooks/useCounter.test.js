import {renderHook, act} from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';


describe('Pruebas en useCounter', ()=>{
    test('Debe de retornar valores por defecto', () => {
        const {result} = renderHook(()=> useCounter());

        expect(result.current.counter).toBe(1);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');
    });

    test('Debe tener el counter en 100', () => {
        const {result} = renderHook(()=> useCounter(100));
        expect(result.current.counter).toBe(100);
    });

    test('Debe incrementar el counter en 1', () => {
        const {result} = renderHook(()=> useCounter(10));
        const {increment} = result.current;

        act(()=>{
            increment();
        });

        const {counter} = result.current;
        expect(counter).toBe(11);
    });

    test('Debe decrementar el counter en 1', () => {
        const {result} = renderHook(()=> useCounter(10));
        const {decrement} = result.current;

        act(()=>{
            decrement();
        });

        const {counter} = result.current;
        expect(counter).toBe(9);
    });


    test('Debe resetear el counter', () => {
        const {result} = renderHook(()=> useCounter(10));
        const {reset, increment} = result.current;

        act(()=>{
            increment();
            reset();
        });

        const {counter} = result.current;
        expect(counter).toBe(10);
    });
})