# EasyCarros - Front-End Challenge

## Intro

This front-end challenge were built with [Create React App](https://create-react-app.dev/) (CRA) to [EasyCarros](https://easycarros.com/) development team.

This challenge is using libraries like [styled-components](https://styled-components.com/)and [styled-icons](https://styled-icons.js.org/).

Every single component were built aimed a better code experience and organization. They are using `styled-components` to style their elements and `prop-types` to check if theirs props are passed right from their parents. Some icons are available with `styled-icons` too.

Axios was choosed to make request data function. This function are availble into [request.js](src/utils/request.js) file.

Here are constants like *custom messages*, *status*, *plate regex*, etc available to use into [constants.js](src/utils/contants.js) file. Other utilitaries functions are available into the [utils folder](src/utils)

The application is using hooks from ReactJS core to managing state and a plates provider with Context API. Besides, `useEffect()` hook is used to control the life cycle of application. To manage routes the [react-router-dom](https://reacttraining.com/react-router/) were choosed.

Absolute paths were setup to improve readability and import statements.

[ESLint](https://eslint.org/) and [EditorConfig](https://editorconfig.org/) were added as code linter to helps maintain consistent code style.

## Development

To start development, run the followed commands into your terminal app

```bash
$ npm install # to install used packages
$ npm run start # to init development environment
```

Your development environment will be available in http://localhost:3000

## Build

To build that repository, run the followed command

```bash
$ npm run build
```

All files will be optimized to use in the production environment and available into `build` folder.

## Folder structure

Currently, the folders used are from [CRA](https://create-react-app.dev/) structure, with a few adds.

```
src/
  components/ # hold all components available
  pages/ # hold pages availabe
  providers/ # hold the PlateContext provider
  static/ # to static files as logo, icons, etc
  utils/ # tool belt with some functions and constants
  App.js # wrapp the whole application
  index.js # init application
  index.css # basic styles
```
