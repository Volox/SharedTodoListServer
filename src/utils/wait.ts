/**
 * Wait a specified amount of time, then resolve the promise.
 *
 * @param timeout Time to wait in ms
 */
const wait = (timeout: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
};

export default wait;
