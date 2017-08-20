## Working With Algebraic Data Types in Javascript - 03

This time we take a deep dive into another ADT, named `Arrow`. We see that `Arrow` allows us to work with functions in a slightly different way then just normal function composition. While mechanically it is the same as normal function composition, it provides a different way of viewing how composition is carried out.

Using a Pizza Oven analogy, we look at how we can adapt on either side of the `Arrow`, providing another means for extending our functions. We also take a look at how we can use `Arrow` to run parallel computations, just by using functions are `Pair` endomorphisims.

We then use all the bits we went over to try a refactor on our random number generating code. When it is all said and done, we find `Arrow` may not buy us what we need and adds a bunch of complexity to boot.

Finally we conclude on hinting at a possible solution to our refactor by just changing our perception of the `State` monad. We want to look not as simply an ADT that lets us share mutable state between functions, but more as just a simple Deterministic Finite State Machine (DFSM) and give a teaser for next session.

The ADT library we are using this series is called `crocks` and can be [found here](https://github.com/evilsoft/crocks).

### Install

Clone this repo onto your local system, navigate to the folder and run:

```
$ git checkout adts-03
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
