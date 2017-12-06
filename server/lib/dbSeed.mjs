import faker from 'faker';

export const user = () => ({
  email: faker.internet.email(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  password: faker.internet.password()
});

const userArray = length =>
  Array(length)
    .fill()
    .map(() => user());

console.dir(userArray(10));
