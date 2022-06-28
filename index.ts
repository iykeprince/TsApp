import { User } from './User';

const user = User.buildUser({ id: 1, name: 'John', age: 32});

user.on('change', () => {
  console.log('Some changes occured', user)
});

console.log('id of the user', user.get('id'))
