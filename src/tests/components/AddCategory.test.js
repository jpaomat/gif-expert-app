import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory/AddCategory";
import '@testing-library/jest-dom';

describe('Test to AddCategory component', () => {
    const props = {
        setCategories: jest.fn()
    };
    let event;
    let wrapper = shallow(<AddCategory {...props} />); // para que se muestre la ayuda
    beforeEach(() => {
        wrapper = shallow(<AddCategory {...props} />);
        event = {
            target: {
                value: 'toy story'
            },
            preventDefault: jest.fn()
        }
    })

    test('should create component', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should simulate that input value is changing', () => {
        const input = wrapper.find('input');
        input.simulate('change', event);
        expect(wrapper.find('p').text()).toBe(event.target.value);
    })

    test('should that when handleSubmit function is called the setCategories hook not have been called', () => {
        wrapper.find('form').simulate('submit', event);
        expect(props.setCategories).not.toHaveBeenCalled();
    })

    test('should call setCategories hook and clean input value', () => {
        const input = wrapper.find('input');
        input.simulate('change', event);
        wrapper.find('form').simulate('submit', event);
        expect(input.prop('value')).toBe('');
        expect(props.setCategories).toHaveBeenCalledTimes(1);
        expect(props.setCategories).toHaveBeenCalledWith(expect.any(Function));
    })

})
