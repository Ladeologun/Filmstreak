import renderer from 'react-test-renderer';
import {test,expect} from '@jest/globals';
import MovieCarouselSection from '~movies/components/_partials/MovieCarouselSection';
import { Movie } from '~movies/types';


const MovieBuilder:Movie = {
    id: 1,
    backPoster: "https://example.com/backposter.jpg",
    popularity: 85.2,
    title: "The Great Adventure",
    poster: "https://example.com/poster.jpg",
    overview: "A thrilling adventure of a lifetime.",
    rating: 8.5,
    language: "English",
    video: true,
    date: "2024-04-12"
};

test('renders correctly', () => {
    const tree = renderer.create(<MovieCarouselSection movies={[MovieBuilder]} />).toJSON();
    expect(tree).toMatchSnapshot();
});
