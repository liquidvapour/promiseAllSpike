import { waitAsync, setTimeoutAsync } from './asyncTools.mjs';

const doThing = async (input) => {
  const timeout = Math.round(Math.random() * 50);
  console.log(`doThing(${input}) waiting: ${timeout} setup`);
  await waitAsync(timeout);
  console.log(`doThing(${input}) waiting: ${timeout} done!`);
};

async function setupWithAwait() {
  console.log("getting list of promises");
  const promiseList = [await doThing("A"), await doThing("B"), await doThing("C")];
  console.log("awaiting all promises");
  return Promise.all(promiseList);
}

function setup() {
  console.log("getting list of promises");
  const promiseList = [doThing("A"), doThing("B"), doThing("C")];
  console.log("awaiting all promises");
  return Promise.all(promiseList);
}

const result = await setTimeoutAsync((a, b) => a + b, 10, 2, 4);
console.log(`result: ${result}`);

try {
  await setTimeoutAsync(
    () => {
      throw new Error("BAD!");
    },
    10
  );
} catch (err) {
  console.error(err);
}

console.log("-- with await --");
await setupWithAwait();
console.log("-- with out await --");
await setup();
console.log("-- done --");
