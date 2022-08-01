# Promise.all Spike
Investigate what happens with code like:

```JavaScript
Promise.all([await doThing("A"), await doThing("B"), await doThing("C")]);
```