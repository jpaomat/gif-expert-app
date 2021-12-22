import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe('Test to GifGrid component', () => {
    const props = {
        category: 'cars'
    };
    let wrapper;

    test('should create component', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        wrapper = shallow(<GifGrid {...props} />);
        expect(wrapper).toMatchSnapshot();
    })

    test('should show items when images are loaded', () => {
        const gifs = [{
            id: '124',
            title: 'Toy Story',
            url: 'https://toystory.jpg'
        }];
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        wrapper = shallow(<GifGrid {...props} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })

})
