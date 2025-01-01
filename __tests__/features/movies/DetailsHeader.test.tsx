import renderer from 'react-test-renderer';
import {test,expect} from '@jest/globals';
import DetailsHeader from '~movies/components/_partials/DetailsHeader';


test('renders correctly', () => {
    const tree = renderer.create(<DetailsHeader hasTitle={true} title='filmstreak' hasRightCTA={true}/>).toJSON();
    expect(tree).toMatchSnapshot();
});
