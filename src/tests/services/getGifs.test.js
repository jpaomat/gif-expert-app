import { getGifs } from "../../services/getGifs";

describe('Test to getGifs service', () => {
    test('should validate that argument is sent correctly and return 10 items', async () => {
        const respGifs = await getGifs('toy story');
        expect(respGifs.length).toBe(10);
    })

    test('should validate that argument sent is void and return 0 items', async () => {
        const respGifs = await getGifs('');
        expect(respGifs.length).toBe(0);
    })
})
