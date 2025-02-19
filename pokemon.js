const getDataPokemon = async () => {
    try {
        // fetch pertama
        const url = 'https://pokeapi.co/api/v2/pokemon?limit=10';
        const request = new Request(url, {
            method: 'GET',
        });
        const response = await fetch(request);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const dataJSON = await response.json();
        const dataPokemon = dataJSON.results;
        

        const getDataAbilities = async (url) => {
            try {
                const request = new Request(url, {
                    method: 'GET',
                });
                const response = await fetch(request);
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const dataJSON = await response.json();
                return dataPokemon[0].abilities = dataJSON.abilities;
                
            } catch (error) {
                if (error instanceof Error) console.log(error.message)
            }
        }

        // fetch part2
        
        const fetchAb1 = await getDataAbilities('https://pokeapi.co/api/v2/pokemon/1/');
        dataPokemon[0].abilities = fetchAb1;
        const fetchAb2 = await getDataAbilities('https://pokeapi.co/api/v2/pokemon/2/');
        dataPokemon[1].abilities = fetchAb2;
        const fetchAb3 = await getDataAbilities('https://pokeapi.co/api/v2/pokemon/3/');
        dataPokemon[2].abilities = fetchAb3;
        const fetchAb4 = await getDataAbilities('https://pokeapi.co/api/v2/pokemon/4/');
        dataPokemon[3].abilities = fetchAb4;
        const fetchAb5 = await getDataAbilities('https://pokeapi.co/api/v2/pokemon/5/');
        dataPokemon[4].abilities = fetchAb5;
        const fetchAb6 = await getDataAbilities('https://pokeapi.co/api/v2/pokemon/6/');
        dataPokemon[5].abilities = fetchAb6;
        const fetchAb7 = await getDataAbilities('https://pokeapi.co/api/v2/pokemon/7/');
        dataPokemon[6].abilities = fetchAb7;
        const fetchAb8 = await getDataAbilities('https://pokeapi.co/api/v2/pokemon/8/');
        dataPokemon[7].abilities = fetchAb8;
        const fetchAb9 = await getDataAbilities('https://pokeapi.co/api/v2/pokemon/1/');
        dataPokemon[8].abilities = fetchAb9;
        const fetchAb10 = await getDataAbilities('https://pokeapi.co/api/v2/pokemon/10/');
        dataPokemon[9].abilities = fetchAb10;

        console.log(dataPokemon);

    } catch (error) {
        if (error instanceof Error) console.log(error.message)
    }
}

getDataPokemon()