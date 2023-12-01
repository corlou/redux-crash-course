# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

- Store = centralised information
- Reducers = all the actions
- Selectors = guy that can directly talk to the store
- Dispatch/useDispatch = a hook that uses a very specific reducer to update some information in the store
- Actions
- Slices = In Redux, a "slice" refers to a piece of the Redux state. It's a way to modularize and organize your Redux state by breaking it down into smaller parts, each managed by a separate reducer. Slices are typically created using the **`createSlice`** function provided by the **`@reduxjs/toolkit`** package, which is a set of utilities and tools to simplify Redux development.
- Hooks

State management tool

Want to avoid prop drilling = parent components passing information down to each child component to finally render that information.

The properties are getting drilled down one by one = want to avoid this

Create a global state/placeholder so that if any one needs any information, we can just ask the global state/placeholder directly.

If anyone can reach out to get that information, then anyone can update that information too. Therefore there should be rules on how to do read and how to update the information.

To query from the state/global state/store, have the "useSelector" as a method which gives me access to the state which is an object and just grab whatever I need from it. See line 5 for state.todos

![Screenshot 2023-12-01 at 3.46.20 pm.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/30226c7e-002b-4516-830f-543ce7ca6d25/2ef19b31-4d64-4316-985b-e19bc7fa81a0/Screenshot_2023-12-01_at_3.46.20_pm.png)

We created a store

We gave it reducers (we don't know what the reducers are for now but we'll give them to you)

No component should be aware of the store, which is why we wrap the entire application in a Provider tag

Define functionality which is also called "slice/slices" by first declaring an initial state

Then use the "createSlice" method which is a new method inside the redux toolkit

Provide a name to the slice (functionality) as there can be many slices, provide an initial state (this is just an object), then provide a list of reducers

Export reducer out of the slice as it will be used in store as well as export the individual methods

The import the useDispatch and the method I want to use (see pic)

![Screenshot 2023-12-01 at 4.11.42 pm.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/30226c7e-002b-4516-830f-543ce7ca6d25/176c5b64-2046-417d-8ebc-96a1c54e4d8f/Screenshot_2023-12-01_at_4.11.42_pm.png)

In this case, I used {useDispath} and the method {removeToDo} for the button
# redux-crash-course
