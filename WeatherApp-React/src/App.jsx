import React from 'react'
// import './App.css'

function App() {

    const apiKey = "887e67b6c4564982a5e212846231110"

    // const apiUrl = "https://api.weatherapi.com/v1/forecast.json?key=887e67b6c4564982a5e212846231110&q=Midrand&days=3&aqi=no&alerts=no"

    const [weatherData, setWeatherData] = React.useState(null)

    React.useEffect(() => {
        async function getWeather() {
            const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=Midrand&days=3&aqi=no&alerts=no`)

            let data = await response.json();

            setWeatherData(data)
        }

        getWeather()
        
    }, [apiKey]);

    console.log(weatherData)

    const description = weatherData.current.condition.text
    const temp = weatherData.current.temp_c
    const location = weatherData.location.name




    return (
        <>
            

                {weatherData ? (
                    <div>
                        <div>
                        {/* {weatherData.current.condition.text} */}
                        {description}
                        </div>
                        <div>
                            {/* {weatherData.current.temp_c} */}
                            {temp}
                        </div>
                        <div>
                            {/* {weatherData.location.name} */}
                            {location}
                        </div>
                    </div>
                ) : (
                    <p>nothing to  see hear</p>
                )}


            
        </>
    )
}

export default App