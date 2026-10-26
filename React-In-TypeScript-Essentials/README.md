# React in TypeScript - Essentials

This folder contains small, standalone React + TypeScript projects for learning
how to build React components with type-safe props, state, and event handlers.
Each numbered folder is a separate Vite app, so you can explore or run the
examples independently.

## Learning path

1. [Storing prop types as a custom type](./01-storing-prop-type-as-custom-type/)
   - Describe a component's props with a TypeScript type.
2. [Defining a type for props with children](./02-defining-a-type-for-props-with-children/)
   - Type the content that a component receives between its opening and closing tags.
3. [Another way of typing components](./03-another-way-of-typing-components/)
   - Explore another approach to typing React components.
4. [Header component exercise](./04-exercise-header-component/)
   - Practice building a component with typed props and children.
5. [Using `useState` and TypeScript](./05-using-useState-and-typescript/)
   - Type component state and update it safely.
6. [Reusing types across files](./06-another-exercise-and-reusing-types-across-files/)
   - Define and import shared types between components.
7. [Passing functions as type-safe values](./07-passing-functions-as-values-in-a-type-safety-way/)
   - Pass callback functions through props and describe their argument and return types.
8. [Handling and typing events and using `useRef`](./08-handling-and-typing-events-AND-working-with-generic-event-types-AND-using-useRef/)
   - Type form and other React events, use generic event types and refs, and connect child component callbacks to parent state.

## Run an example

Choose a numbered project, change to its directory, and install its dependencies:

```sh
cd 08-handling-and-typing-events-AND-working-with-generic-event-types-AND-using-useRef
npm install
npm run dev
```

Open the local URL printed by Vite. Replace the folder name in the `cd` command
to run a different example. Each project has its own `package.json`; run these
commands from inside the project you want to use.

To check a project's TypeScript build or lint its files, run these commands in
that project's directory:

```sh
npm run build
npm run lint
```
