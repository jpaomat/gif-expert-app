import { shallow } from "enzyme";
import { GifExpertApp } from "../GifExpertApp/GifExpertApp";

describe('Test to GifExpertApp component', () => {
    let wrapper = shallow(<GifExpertApp />);
    test('should create component', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should validate if call AddCategory and GifGrid components', () => {
        const props = {
            defaultCategories: [
                'cars',
                'cats'
            ]
        }
        wrapper = shallow(<GifExpertApp {...props} />)
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('AddCategory').exists()).toBe(true);
        expect(wrapper.find('GifGrid').length).toBe(props.defaultCategories.length);
    })

})
