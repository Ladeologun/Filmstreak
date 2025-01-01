import renderer from 'react-test-renderer';
import {test,expect} from '@jest/globals';
import { ScreenWrapper } from "~components";


test('renders correctly', () => {
    const tree = renderer.create(<ScreenWrapper hideStatusBar={false} />).toJSON();
    expect(tree).toMatchSnapshot();
});
