import { useFetchGifs } from "../../hooks/useFetchGifs";
import {renderHook} from '@testing-library/react-hooks';
describe('Pruebas en el hook useFetchGifs', ()=>{
    test('Debe de retornar el estado incial', async() => {
        const {result, waitForNextUpdate} = renderHook(()=> useFetchGifs('One Puch'))
        const {data, loading} = result.current;
        await waitForNextUpdate();

        console.log(data, loading);

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('Debe de retornar una arreglo de img y loading en false', async() => {
        const {result, waitForNextUpdate} = renderHook(()=> useFetchGifs('One Puch'))
        await waitForNextUpdate();
        const {data, loading} = result.current;

        expect(data.length).toEqual(10);
        expect(loading).toBe(false);
    });
})