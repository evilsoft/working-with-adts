## Working With Algebraic Data Types in Javascript - 05
Now that we have our Random Number Generator hooked up to our `GameState`, it is time to address the `Deck` model we originally put together. We start by changing how we select cards from the Deck because the index we want to select from will be provided for us. We also change the `Deck` interaction to pull one random card at a time instead of shuffling the entire `Deck` all at once. We build out a new "type" to represent our `Deck` and in doing so get the opportunity to look at a new `Monoid` called `Last`. We explore some of the features of `Last` to get a feel for how we can use it in our new flow.

With our new `Deck` ready to go, we now need to hook up to our `GameState` and figure out how we are going to get our Random Numbers into our `Deck` flow. Before we get into that, we do a quick refactor to pull out all of the boilerplate construction of integrating with the `GameState`. Once we make sure that all of our `Rando` functions still work as expected, we then utilize our new helpers to build out the accessor functions for our `Deck` model

Using those new `GameState` accessors, it is now just a matter of getting the all of our functions set up to work in the `GameState` world. With just a couple new functions, we find it is pretty easy to hook up and pull random cards from our `Deck`. Success!

The ADT library we are using this series is called `crocks` and can be [found here](https://github.com/evilsoft/crocks).

### Install

Clone this repo onto your local system, navigate to the folder and run:

```
$ git checkout adts-05
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
