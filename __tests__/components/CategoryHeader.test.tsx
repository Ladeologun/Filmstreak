import renderer from 'react-test-renderer';
import {test,expect} from '@jest/globals';
import { CategoryHeader } from "~components";


test('renders correctly', () => {
    const tree = renderer.create(<CategoryHeader title='filmstreak' />).toJSON();
    expect(tree).toMatchSnapshot();
});
