# Our Folder Structure

This project follows a folder structure that separates concerns and helps to maintain a clear and organized codebase. The structure consists of four main folders:

- `components/`: Contains reusable and composable UI elements that can be used throughout the application.

- `containers/`: Contains components that are responsible for managing state and data for other components.

- `images/`: Contains all images used in the project.

- `services/`: Contains files used for API calls and data fetching.

## Components

The `components/` folder contains all reusable UI elements, such as buttons, inputs, cards, and modals. Each component is self-contained and can be easily reused throughout the application. Components should be named using PascalCase and have a `.jsx` file extension.


## Containers

The `containers/` folder contains components that are responsible for managing state and data for other components. Containers are often larger and more complex than regular components and can be thought of as the "glue" that ties the application together. Containers should be named using PascalCase and have a `.jsx` file extension.


## Images

The `images/` folder contains all images used in the project. Images should be named using kebab-case and have a file extension that corresponds to the image format.


## Services

The `services/` folder contains files used for API calls and data fetching. Each file should be responsible for a specific API endpoint and exported as a function that returns a Promise. Services should be named using camelCase and have a `.js` file extension.


## Conclusion

This folder structure helps to keep the codebase organized and maintainable, by separating concerns and grouping related files together. By following this structure, developers can quickly locate and modify the necessary files and keep the codebase consistent and easy to understand.
