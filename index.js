const getDataWeather = async () => {
    try {
        const apiKey = '7653323927149d06f4ad598d492dbbee';
        const url = `https://api.openweathermap.org/data/2.5/weather?q={London}&appid={${apiKey}}`;
        const request = new Request(url, {
            method: 'GET',
        });
        const response = await fetch(request);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const dataJSON = await response.json();
        console.log(dataJSON);
    } catch (error) {
        if (error instanceof Error) console.log(error.message)
    }
}

getDataWeather()