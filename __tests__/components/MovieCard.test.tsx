import renderer from 'react-test-renderer';
import {test,expect} from '@jest/globals';
import { MovieCard } from "~components";
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
    const tree = renderer.create(<MovieCard item={MovieBuilder}  section='Popular'/>).toJSON();
    expect(tree).toMatchSnapshot();
});
