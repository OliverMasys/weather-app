/*
 * JavaScript Boilerplate for Weather Dashboard Assignment
 * 
 * This JavaScript file is part of the Asynchronous JavaScript assignment.
 * Your task is to complete the functions with appropriate async/await,
 * handle errors, and update the DOM with the fetched data.
 * 
 * Follow the TODO prompts and complete each section to ensure the
 * weather dashboard works as expected.
 */

// Function: Fetch Weather Data
async function fetchWeatherData(location) {
    const url = `https://wttr.in/${location}?format=j1`;
    try {
        // TODO: Fetch data from the API using async/await
        const response = await fetch(url);
        // Hint: Use the fetch() method and await its response
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const weatherData = await response.json();
        return weatherData;
    } catch (error) {
        // TODO: Handle errors gracefully
        throw error('Fetch Error:', error);
        // Hint: Log the error to the console and rethrow it
        
        
    }
}

// Function: Display Weather Data
function displayWeatherData(data) {
    // TODO: Update the DOM with weather data
    const weatherElement = document.getElementById('weatherData');
    // Hint: Use document.getElementById() to select the element and update its innerHTML
    
    const currentCondition = data.current_condition[0]; 
    const temperature = currentCondition.temp_C; //Temperature in Celsius
    const feelsLike = currentCondition.feelsLikeC; //feels like in Celsius
    const description = currentCondition.weatherDesc[0].value; // weather description
    
    //update innerHTML display
    weatherElement.innerHTML = `
        <div class = "card">
            <div class = card-body">
            <h3 class = "card-title"> Weather for your location</h3>
            <p class = "card-title"><strong>Temputure:</strong>Temperature:</strong> ${temperature}°C</p>
            <p class = "card-title"><strong>Feels:</strong>Feels like:</strong> ${feelsLike}</p>
            <p class = "card-title"><strong>Condition:</strong>Condition:</strong> ${description}</p>
        </div>
    </div>
    `;
}

// Function: Get Weather
async function getWeather(location) {
    try {
        // TODO: Fetch weather data and display it
        const weatherData = await fetchWeatherData(location);
        displayWeatherData(weatherData);
        // Hint: Call fetchWeatherData() and displayWeatherData()
        
        
    } catch (error) {
        // TODO: Display an error message in the DOM
        const weatherElement = document.getElementById('weatherData');
        weatherElement.innerHTML = `<p> Failed to fetch weather data. Try again.</p>`;
        // Hint: Use document.getElementById() to select the element and update its innerHTML

    }
}

// Event Listener for Form Submission
document.getElementById('weatherForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const location = document.getElementById('locationInput').value;
    await getWeather(location);
});
