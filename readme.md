# Food API

# Part one

The following must be completed in part one:
- connect with the API
- display an item of food on the homepage (any image from the public assets folder)
- display a section for fruit with a list of 5 items
- display a section for veg with a list of 5 items
- update the list with images of the items (matches name of image in folder)
- add a search bar to the homepage where:
  - a user can search for a food item (done via `?q=apple` query param)
  - will display an image of that item after the search

# Part two

The following must be completed in part two:
- create a page for fruit and another page for veg
- remove the sections and replace them with these pages including links to the pages
- add another page for food creation
- add food name text-box and also a button to submit the name of the food to the API
- check to see if item appears in correct page (show a placeholder image for item)

## Goal of exercise

To get a better understanding of how an API works and how to retrieve and send data.

## Design

[Figma designs](https://www.figma.com/file/ae94JCqHvCR0pryfgGg9zs/The-serviette?type=design&node-id=0%3A1&mode=design&t=8LvJacFxwUFlqMfS-1)

## What is included?

[Vite](https://vitejs.dev/guide/why.html) - used to run the project
[Vitest](https://github.com/vitest-dev/vitest) - used to run the tests for the project
[Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - used to render the React components in the test
[Axios](https://axios-http.com/docs/intro) - to retrieve data from API

### Added but not needed
[React Query](https://tanstack.com/query/latest/) - declarative way of getting and storing data, you can use this if you wish

## What is not included?

### State Management

In addition, there is no State management as it is not needed in the projects but you could use:

-  [XState](https://xstate.js.org/) - State machine state management library
-  [Redux](https://react-redux.js.org/) - Classic store for React
-  React Context - a simple non-library version of Redux
