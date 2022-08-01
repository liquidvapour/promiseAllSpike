# Promise.all Spike
Investigate what happens with code like:

**!!!BAD DO NOT USE!!!**
```JavaScript
    await Promise.all([await doThing("A"), await doThing("B"), await doThing("C")]);
```

## TL;DR
The above runs all calls to doThing in sequence and makes sure they complete before passing the array of completed Promises to `Promise.all()`.

**!!!GOOD DO USE!!!**
```JavaScript
await Promise.all([doThing("A"), doThing("B"), doThing("C")]);
```
