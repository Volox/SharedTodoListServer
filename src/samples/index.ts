import someAsyncFunction from './async_await_sample';
import somePromiseFunction from './promise_sample';

const someFunction = somePromiseFunction;
// const someFunction = someAsyncFunction;

console.log('Before calling someFunction');
someFunction().then(value => {
  console.log('Then of someFunction');
  console.log('value:', value);
});
console.log('After calling someFunction');
