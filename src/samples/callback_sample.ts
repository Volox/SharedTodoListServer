type CallbackFunction = (value: number) => void;

const someCallbackFunction = (callback: CallbackFunction) => {
  console.log('Inside someCallbackFunction');

  console.log('Start sync operations for someCallbackFunction');

  setTimeout(() => {
    console.log('Wait has finished');

    const value = 42;
    console.log(`Value is ${value}`);

    // Call the callback
    callback(value);
  }, 1000);

  console.log('Finish sync operations for someCallbackFunction');
};

export default someCallbackFunction;
