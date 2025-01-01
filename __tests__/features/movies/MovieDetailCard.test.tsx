import renderer from 'react-test-renderer';
import {test,expect} from '@jest/globals';
import MovieDetailCard from '~movies/components/_partials/MovieDetailCard';


test('renders correctly', () => {
    const tree = renderer.create(
        <MovieDetailCard
            language='en' 
            id={2}
            title={"new dragon show"}
            popularity={7}
            rating={7.6}
            addTowishlist={()=>{}}
            isAddingMovieToWishlist={false}
            isMovieOnWishlist={true}
            isCheckingMovieState={false}
        />).toJSON();
    expect(tree).toMatchSnapshot();
});
