import { dataNormalizer } from "./dataNormalizer";

const mockData = [{
  id: '62b7f6e3',
  first_name: 'james',
  last_name: 'damon oliver',
  age: '04-08-1985',
}];

test('should work', () => {
  const result = dataNormalizer(mockData);
  expect(result[0].id).toBe('62b7f6e3');
  expect(result[0].date_of_birth).toBe('08/04/1985');
  expect(result[0].full_name).toBe('James Damon Oliver');
});
