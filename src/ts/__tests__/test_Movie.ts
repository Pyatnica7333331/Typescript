import Movie from '../domain/Movie';
import Cart from '../service/Cart';

test('new movie should be added', () => {
  const movie = new Movie(848228, 'The Avengers', 'Joss Whedon', 290, 2012, 'USA', '«Avengers Assemble!»', 'fantasy', 137);
  const cart = new Cart();
  cart.add(movie);
  expect(cart.items.length).toBe(1);
});