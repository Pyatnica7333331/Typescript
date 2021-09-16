import Cart from '../service/Cart';
import Book from '../domain/Book';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('Должна считать суммарную стоимость', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new Movie(848228, 'The Avengers', 'Joss Whedon', 290, 2012, 'USA', '«Avengers Assemble!»', 'fantasy', 137));
  
  expect(cart.getSum()).toBe(2290);
});

test('Должна считать суммарную стоимость (с учётом скидки)', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new Movie(848228, 'The Avengers', 'Joss Whedon', 290, 2012, 'USA', '«Avengers Assemble!»', 'fantasy', 137));

  expect(cart.sumIncDiscount(10)).toBe(2061);
});

test('Должна удалять объект по id', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new Movie(848228, 'The Avengers', 'Joss Whedon', 290, 2012, 'USA', '«Avengers Assemble!»', 'fantasy', 137));
  cart.deleteCart(848228);

  expect(cart).toEqual({
    _items: [{
      id: 1001,
      name: 'War and Piece',
      author: 'Leo Tolstoy',
      price: 2000,
      pages: 1225,
    }]
  });
});
