# Boilerplate Vue3 & Storybook
Boilerplate with Vue 3 (using Vite as bundler and CLI), Storybook, Mocker Service Worker and Vitest (unit test).
   
## Config project and install dependencies
   
- Enter project directory
```   
cd <project dir>
```
      
- Install dependencies and config env file for backend server
```   
yarn config:proj
```  
   
- Install Mocker Service Work
```
npx msw init public
```

## Usage   

- Init Storybook and Vue app
```
yarn dev
```

- Init Vue app only
```
yarn serve
```

- Init Storybook only
```
yarn storybook
```

- server mode
```
// Starts server run all services in server mode
yarn dev:server
```
```
// Starts Strapi server (required for the following commands)
yarn server
```
```
// run Vue app only in server mode
yarn serve:server
```
```
// run Storybook only in server mode
yarn storybook:server
```
   
- Run unit tests (Vitest)
```
yarn test
```
   
## Features and good practices
   
### Mocker Mode / Server Mode   
- All scripts run mocker server by default.   
- To consume server data, you have to define the server URL in the `VITE_API_URL` variable, at `.env` file, and add `:server` to script name. e.g. `yarn dev:server`.  
- All MSW config and data files must be placed inside `/src/mocks`   
- Data objects are exported from `/src/mocks/data.js`
- Request handlers are configured at `/src/mocks/handlers.js` and are used by Vue and Storybook from here.
   
### Component styling, testing and prototyping
- CSS files meant for general used must be placed under `/styles` directory.
- ***Component-specific style***, ***test cases*** and ***stories*** files must be placed under the ***component's root directory*** and named after it's *.vue* file. CSS files must be imported into the component's script area, so it can be read by Storybook.
