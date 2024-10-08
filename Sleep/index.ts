/** Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value. */
async function sleep(millis: number) {
  return new Promise((resolve: any) => {
    setTimeout(() => {
      resolve();
    }, millis);
  });
}
