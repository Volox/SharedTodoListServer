import wait from '../utils/wait';

const someAsyncFunction = async () => {
  console.log('Inside someAsyncFunction');
  console.log('Start sync operations for someAsyncFunction');
  // ...
  console.log('Finish sync operations for someAsyncFunction');

  await wait(1000);
  console.log('Wait has finished');

  const value = 42;
  console.log(`Value is ${value}`);

  return value;
};

export default someAsyncFunction;
