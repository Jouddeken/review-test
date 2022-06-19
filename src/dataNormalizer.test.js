import { dataNormalizer } from "./dataNormalizer";

const mockData = [{
  id: '62b7f6e3',
  name: 'james',
  full_name: 'Damon waiter',
  age: '04-08-1985',
  address: {
    street: 'Baker st.',
    number: '11',
    zip: '10876',
    state: 'North Carolina',
    country: 'USA',
  },
  rating: 3.728823,
}];

test('should work', () => {
  const result = dataNormalizer(mockData);
  expect(result.id).toBe('62b7f6e3');
  expect(result.DoB).toBe('08/04/1985');
  expect(result.address).toBe('11 Baker st. 10876 North Carolina USA');
  expect(result.full_name).toBe('James Damon waiter');
  expect(result.rating).toBe('★★★☆☆');
});
