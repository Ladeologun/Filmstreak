import renderer from 'react-test-renderer';
import {test,expect} from '@jest/globals';
import MovieDetailsHeaderSection from '~movies/components/_partials/MovieDetailsHeaderSection';


test('renders correctly', () => {
    const tree = renderer.create(
        <MovieDetailsHeaderSection
            poster={"https://example.com/backposter.jpg"}
            showWatchlistWalkthrough={false}
            title='now playing'
            handleWalkthroughClose={()=>{}}
        />).toJSON();
    expect(tree).toMatchSnapshot();
});
