## Working With Algebraic Data Types in Javascript - 04

After trying to clean some of the imperative bits up using the `Arrow` type, we found that there may be something we are missing with our implementation. In this session, we try to change our intuition around the `State` type. Instead of looking at it as a way to allow for mutable state between a family of functions, we instead look at it as a way to describe a simple Deterministic Finite State Machine.

In order to change our perspective, we look at the various ways to construct it. We start off with the default constructor and encode our transitions using a function that returns a `Pair`. While this shows what is going on under the hood, it is not very friendly with our vanilla JS functions. We then look at (2) of the construction helpers `modify` and `get` to give us the ability to write our transitions in normal JS functions, and lift them into the `State` and let those functions handle the encoding for us.

Building out a simple vending machine, we look at how to use `chain` to apply and compose the various transitions for both normal state transitions and state evaluation. We look at how we can combine simple transitions to create more complex transitions without changing how we interact with the type. Finally we look at how to combine both state transition and evaluation into the flow.

With the new way of looking at `State`, we take a crack at getting rid of those imperative bits in our RNG. We separate out all the separate concerns into their own JS functions.

The ADT library we are using this series is called `crocks` and can be [found here](https://github.com/evilsoft/crocks).

### Install

Clone this repo onto your local system, navigate to the folder and run:

```
$ git checkout adts-04
```
This will check out this specific branch, which is the result of the session is associated to.

Once checked out, the dependencies needed to run this project can be installed by running:
```
$ npm install
```

### Run the code

To get started running some code, just run the following in the project root:

```
$ npm start
```

Now just edit the `index.js` file in the root, and your code will be executed on each save.
