import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem/GifGridItem';

describe('Test to GifGridItem component', () => {
    let wrapper;
    let props;
    beforeEach(() => {
        props = {
            url: 'https://test',
            title: 'test'
        }
        wrapper = shallow(< GifGridItem {...props} />);
    })

    test('should create component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should validate the title is correct', () => {
        const paragraph = wrapper.find('p');
        expect(paragraph.text().trim()).toBe(props.title);
    })

    test('should get the img equal to url and alt of props', () => {
        const img = wrapper.find('img');
        const propsImg = img.props(); // obtiene todas las propiedades
        expect(propsImg.alt).toEqual(props.title); // img.prop('alt) -> propiedad especifica
        expect(propsImg.src).toEqual(props.url);
    })

    test('should have animate__fadeOut class', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');
        expect(className.includes('animate__fadeOut')).toBe(true);
    })


})
