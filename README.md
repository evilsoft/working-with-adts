## Working With Algebraic Data Types in Javascript - 02

This session mainly focuses on the details of a Linear Congruential Generator. This should a help us understand the strengths and weaknesses of using a number sequence of this nature. We explore the various aspects of the equation and talk some about how bitwise operations work in Javascript.

Once we have the generator built, we shift from using a generator function to a `State` monad. First we manually set up a `State` by wrapping a function that returns a `Pair`, to show us what is happening behind the scenes, mechanically. Then we look at two functions used for getting and setting the state in the `State` monad, `get` and `modify`.

We use `get` by passing a function to it, which results in a `State` that leaves the state portion untouched and sets the result portion to the result of running the state through our provided function.

We then use `modify` to set the state to the result of the function we pass it. `modify` will set the value to `Unit`, so we need to set our value to be the value we calculated from our new seed. We do that by using `map` and provide it a constant (pointed) function that returns our value. When our `State` is returned, it will contain our calculated value and the modified state.

We then show how using `chain` on our new functions will get us the next number in the sequence and update the state to reflect the new seed to be used when calculating a future number in the sequence.

The ADT library we are using this series is called `crocks` and can be [found here](https://github.com/evilsoft/crocks).

### Install

Clone this repo onto your local system, navigate to the folder and run:

```
$ git checkout adts-02
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
