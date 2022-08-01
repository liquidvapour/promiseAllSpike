export const waitAsync = (timeout) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve();
      } catch (err) {
        reject(err);
      }
    }, timeout);
  });

export const setTimeoutAsync = (handler, timeout, ...args) =>
  new Promise((resolve, reject) => {
    setTimeout(
      (...internalArgs) => {
        try {
          resolve(handler(...internalArgs));
        } catch (err) {
          reject(err);
        }
      },
      timeout,
      ...args
    );
  });  