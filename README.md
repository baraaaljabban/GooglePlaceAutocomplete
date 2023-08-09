# Place Search App

Welcome to the Place Search App! This is a React Native application that allows users to search for places, view their details on a map, and keep a search history.

## Features

- Search for places using Google Places Autocomplete.
- View selected place details on an interactive map.
- Keep track of search history.
- Display error messages for any issues that occur.

## Tech Stack

- React Native: A popular framework for building mobile applications using JavaScript and React.
- Redux: A state management library for managing application state.
- react-redux: Official React bindings for Redux, allowing seamless integration with React components.
- react-native-maps: A package for integrating interactive maps into React Native applications.
- react-native-google-places-autocomplete: A package for adding Google Places Autocomplete to React Native apps.
- Redux Thunk: A middleware for handling asynchronous actions in Redux.
- @reduxjs/toolkit: Redux Toolkit, a set of utilities for simplifying Redux development and improving performance.
- TypeScript: A typed superset of JavaScript, adding static types to the language.

## Getting Started

To run the app locally, follow these steps:

1. Clone this repository: `git clone https://github.com/your-username/place-search-app.git`
2. Install dependencies: `cd place-search-app && npm install`
3. Set up your Google Places API key in `src/core/enums/Api.ts`.
4. Start the development server: `npm start`

## Project Structure

- `src/components/Map/MapMarkerView.tsx`: Displays the selected place on an interactive map.
- `src/components/Map/PlaceAutocomplete.tsx`: Provides a search input with Google Places Autocomplete.
- `src/components/Map/SearchHistory.tsx`: Displays the search history.
- `src/redux`: Contains Redux-related files, including actions, reducers, and the store configuration.
- `src/core/enums/Api.ts`: Holds API-related constants.

## Tests

The application has been thoroughly tested using Jest and React Testing Library. You can run the tests using the command: `npm test`

## Contributing

Contributions are welcome! If you find a bug or want to add a new feature, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
