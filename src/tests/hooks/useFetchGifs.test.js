import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks';
import { getGifs } from "../../services/getGifs";
// jest.mock("../../services/getGifs");
// const data = [{
//     data: [],
//     loading: true
// }];
// const mockFetch = Promise.resolve({ json: () => Promise.resolve(data) });
// fetch.mockReturnValue(Promise.resolve(mockFetch));

describe('Test to useFetchGifs hook', () => {

    test('should return the initial state', () => {
        const { result } = renderHook(() => useFetchGifs('cats'));
        const {data:gifsList, loading} = result.current;
        expect(gifsList).toEqual([]);
        expect(loading).toEqual(true);
    })

    test('should return the images', async() => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('cats'));
        await waitForNextUpdate();
        const {data:gifsList, loading} = result.current;
        expect(gifsList.length).toEqual(10);
        expect(loading).toEqual(false);
    })

})
