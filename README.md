# The Weather App continued...

## Description

Create an app that uses [openweather.org](https://openweathermap.org/guide) to grab the current weather in a location of your choice. This is the extension from the previous version, using React. There will be less guidance in this example, so make sure to reach out if you are stuck! 

> #### Tools
> - [Previous version](https://github.com/aar9nk/weather-app)
> - [Bootstrap](https://getbootstrap.com/)
> - [Async Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
> - [reactjs](https://reactjs.org/)      
    
    
### Step 1: The setup

1. Create the file and folder structure you need for the project, removing any unwanted files. 
2. Replace the necessary parts of the `public` folder, linking bootstrap in the html file.
3. Find your openweather app key and store it in a file in the root folder of the project called `.env` : 
`REACT_APP_OPEN_WEATHER_API_KEY=put your key here`
4. Refactor your html into jsx. 


### Step 2: The card template

1. Create a component for a template card. 
2. For now *hardcoded* data is fine, but shortly it will be using props. 
3. import proptypes using `import PropTypes from "prop-types";` This will allow the props to be type checked.
4. Take the previous cardHtml and paste it in the render section, changing any necessary jsx syntax

### Step 3: The weather app

1. Import the Card and useState.
2. Create a setState hook for the input's value, and one for the weather data.
3. Target the input's value and and use the hook to set the state on change.
4. Create a `handleSubmit` function that is called on submit of the form. This function will call the API and use the result to set the `weather` state with the `setWeather` hook. Try a `console.log` to make sure it works.
5. Render the `Card` component if there is data in the `weather` state. 
6. Pass the weather state as a prop into the `Card` component. 

### Step 4: Testing and beyond

React has a built in testing library that is quite similar to `chai`. Now is a great time to get started on learning how to test your react apps! As all the work you do in your career will be utilizing testing. Start small and then test each function and each component and their props. 

There is an opportunity to learn even more technologies, such as [typescript](https://create-react-app.dev/docs/adding-typescript/). Or more advanced react techniques such as [react redux](https://react-redux.js.org/).

