import renderer from 'react-test-renderer';
import {test,expect} from '@jest/globals';
import { ListItemSeperator } from "~components";


test('renders correctly', () => {
    const tree = renderer.create(<ListItemSeperator />).toJSON();
    expect(tree).toMatchSnapshot();
});
