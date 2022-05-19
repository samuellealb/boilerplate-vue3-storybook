# Boilerplate Vue3 & Storybook
Boilerplate with Vue 3 (using Vite as bundler and CLI), Storybook, Mocker Service Worker and Vitest (unit test).
   
## Config project and install dependencies
   
- Enter project directory
```   
cd <project dir>
```
      
- Install dependencies   
```   
yarn
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
   
- Run unit tests (Vitest)
```
yarn test
```
   
## Features and good practices
   
### Mocker Service Worker   
- Mocker server run by default both with Storybook and Vue app.   
- All MSW config and data files must be places inside `/src/mocks`   
- Data objects are exported from `/src/mocks/data.js`
- Request handlers are configured at `/src/mocks/handlers.js` and are used by Vue and Storybook from here.
   
### Component styling, testing and prototyping
- CSS files meant for general used must be placed under `/styles` directory.
- ***Component-specific style***, ***test cases*** and ***stories*** files must be placed under the ***component's root directory*** and named after it's *.vue* file. CSS files must be imported into the component's script area, so it can be read by Storybook.
