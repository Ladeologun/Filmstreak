import renderer from 'react-test-renderer';
import {test,expect} from '@jest/globals';
import DashboardHeader from '~movies/components/_partials/DashboardHeader';


test('renders correctly', () => {
    const tree = renderer.create(<DashboardHeader title='filmstreak' />).toJSON();
    expect(tree).toMatchSnapshot();
});
