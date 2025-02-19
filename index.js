import printWithFormat from "./src/formattedPrint.js";

const getDataWeather = async (city) => {
    try {
        const apiKey = '7653323927149d06f4ad598d492dbbee';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        const request = new Request(url, {
            method: 'GET',
        });
        const response = await fetch(request);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const dataJSON = await response.json();

        printWithFormat('The weather in %s today is %s, %s', city, dataJSON.weather[0].main, dataJSON.weather[0].description);

    } catch (error) {
        if (error instanceof Error) console.log(error.message)
    }
}

getDataWeather('Bogor');