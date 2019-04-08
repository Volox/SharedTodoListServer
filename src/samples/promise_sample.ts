import wait from '../utils/wait';

const somePromiseFunction = () => {
  console.log('Inside somePromiseFunction');
  console.log('Start sync operations for somePromiseFunction');

  const result = wait(1000)
    .then(() => {
      console.log('Wait has finished');
      return 42;
    })
    .then(value => {
      console.log(`Value is ${value}`);

      // Pass the value to the next "then"
      return value;
    });

  console.log('Finish sync operations for somePromiseFunction');

  return result;
};

export default somePromiseFunction;
