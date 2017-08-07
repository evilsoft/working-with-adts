## Working With Algebraic Data Types in Javascript - 01

In this session we start by putting together a deck of standard playing cards by finding the product of (2) lists of card attributes. We get the product by taking advantage of a `List` being an `Applicative` functor. Once we have our deck of cards, we now need a way to shuffle this deck.

We explore using a `Pair` of `Array`s with each side representing a pile. The pile on the Right is the starting pile. While the pile on the Left is our result. By taking advantage of how a `Pair` can be `Chain`ed, iff the Lefts are `Semigroup`s of the same type, we can create a function that just plucks (1) card from the Right and wraps it in an `Array` on the `Left`. `chain`ing then merges the (2) `Pair`s together. By `chain`ing this function over and over, we can move the entire deck over one card at a time.

We talk a little about how `Pair` is a `Bifunctor` and allows us to `map` over each side of the `Pair`. Finally we commit a horrible sin, and use the Javascript `Math.random` to randomly choose a card to be moved on each iteration, giving us a way to "shuffle" elements in a given `Array`.

The ADT library we are using this series is called `crocks` and can be [found here](https://github.com/evilsoft/crocks).

### Install

Clone this repo onto your local system, navigate to the folder and run:

```
$ git checkout adts-01
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
