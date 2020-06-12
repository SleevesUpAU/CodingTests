# Cool Car App

## Context

- You have been asked to develop a front end by Fast Exotic Cars Pty Ltd
- The goal is to create a place for people to log and show off their "cool" cars

The application will consist of

- A dashboard showing a summary
- Details of each vehicle
- Information about how much the price of the vehicle has fallen
- Ability to add and remove vehicles

## Business Requirements

- You can only add cars from "cool" companies (as defined by Fast Exotic Cars Pty Ltd)
- Users will need to add in the purchase price of the vehicle when adding
- The UI/UX should be "exciting" to use and to show others

## Technical Constraints

- React or React Native
- Single Page Application is required for React
- Typescript is good to have, but not mandatory
- No persistent storage required
- No backend required

## Expectations

We're not just looking for any old solution that would solve the problem. We're looking for:

- production quality code
- good Object Oriented or functional practices
- a solid testing approach
- well thought out naming
- solid error handling
- extensibility/maintainability
- good design
- separation of concerns
- sensible breakdown of code into files/modules
- use of best practices when it comes to JS, CSS, testing etc.
- appropriate use of tools/frameworks

Basically treat the coding test as if it's part of a larger problem.

Please try to limit your time on this project to 2-3 hours.
If you don't have time to implement something please document it in the README and discuss what you would do with more time during the interview.
If you have any designs outside of code please bring them to the interview

Thank you!

## Coding Challenge

Done by Mateusz Siniarski

### Requirements

Please follow the [Environment Setup](https://reactnative.dev/docs/environment-setup) with the React-Native CLI Quickstart as this project does not use Expo

## How to run

Pull dependencies

```bash
yarn
```

Run build on XCode Simulator OR Android Emulator

```bash
yarn android
```

OR

```bash
yarn ios
```

### Notes

Project was setup with typescript template using

```bash
npx react-native init cars --template react-native-template-typescript
```

Inputs/Forms using labels instead of placeholders doesnt really make sense on mobile devices where space is important

Testing the components would be best done with tools that allow us to mock the interations a user can do. Something like [enzyme](https://enzymejs.github.io/enzyme/) or [https://github.com/callstack/react-native-testing-library](react-native-testing-library) would be a good solution.

Also having a Glossary of all the components that we can easily look at from a high level and interact with would be solved with a tool like [Storybook](https://storybook.js.org).

Using hooks was fun. There are still some efficiencies that can be improved with `useCallback` with all the callbacks we use for our state mutations.

### References

- [Using TypeScript with React Native](https://reactnative.dev/docs/typescript)
- [Sample React Native App](https://github.com/facebook/react-native)
- [Generated with the TypeScript template](https://github.com/react-native-community/react-native-template-typescript)
- [React-Navigation V5 Setup](https://reactnavigation.org/docs/getting-started)
- [How to setup module resolution and path aliases with React Native and TypeScript](https://medium.com/@aleksefo/how-to-setup-module-resolution-and-path-aliases-with-react-native-and-typescript-f4924669780a)
- [React-Navigation : Type checking with TypeScript](https://reactnavigation.org/docs/typescript)
- [React-Navigation : Header Buttons](https://reactnavigation.org/docs/header-buttons/)
- [Coolors](https://coolors.co)
- [Color Blender](https://meyerweb.com/eric/tools/color-blend/#:::hex)
- [React-Native : Alert](https://reactnative.dev/docs/alert)
