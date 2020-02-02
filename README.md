# Top News
![Screenshot](public/demo.gif?raw=true "Title")


An app that fetches the latest 5 top stories from different countries.

## How to run

After cloning the repo create a file called `apiKey.js` in the `src` folder and populate it like this: 
```javascript
export const API_KEY = 'YOUR-API-KEY';
```
You can get a free API key from the [News API]("https://newsapi.org/")

then run
```sh
npm install
```

to install all the dependencies.

Finally run
```sh
npm start
```

and see the latest news on the available countries!

## Technical bits

This news app is implemented with React, using SCSS with CSS modules to avoid class name clashing.
Uses also React Router to simulate a multi page app with different routes.

## Future improvements
- Create a server for the app which will handle the available countries logic from a CMS
- Give freedom to the user on how many top news they want to see
- Use a state container like Redux to avoid unnecessary API calls