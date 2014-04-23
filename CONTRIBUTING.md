# Contributing

## Important notes
Please don't edit files in the `dist` subdirectory as they are generated via Gulp. You'll find source code in the `src` subdirectory!

### Code style
Regarding code style like indentation and whitespace, **follow the conventions you see used in the source already.**

## Modifying the code
First, ensure that you have the latest [Node.js](http://nodejs.org/) installed.

1. Fork and clone the repo.
1. Run `npm install` to install all dependencies.
1. Run `gulp` to gulp this project.

## Submitting pull requests

1. Create a new branch, please don't work in your `master` branch directly.
2. Add failing tests for the change you want to make. Run `gulp` to see the tests fail.
3. Fix stuff.
4. Run `gulp` to see if the tests pass. Repeat steps 2-4 until done.
5. Update the documentation to reflect any changes.
6. Push to your fork and submit a pull request.