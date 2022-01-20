# Memoization Recipe

To efficiency solve a recursive problem using Memoization, Alvin (from CoderByte) propose to follow these steps

## 1. Make it work

- Visualize the problem as a tree
- Implement the tree using recursion
- Test it

## 2 . Make it efficient

- Add a memo object
- Add a base case to return memo values (that will check if the argument are in the key memo, it will be returned)
- Store return values into the memo
