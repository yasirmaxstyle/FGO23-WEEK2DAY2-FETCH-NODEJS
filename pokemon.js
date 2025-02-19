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
        const pokemonNames = dataPokemon.map(el => el.name).reduce((acc, item) => {
            acc.push({name: item});
            return acc
        }, []);

        const getDataAbilities = async (n, i) => {
            try {
                const url= `https://pokeapi.co/api/v2/pokemon/${n}/`
                const request = new Request(url, {
                    method: 'GET',
                });
                const response = await fetch(request);
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const dataJSON = await response.json();
                return pokemonNames[i].abilities = dataJSON.abilities;
                
            } catch (error) {
                if (error instanceof Error) console.log(error.message)
            }
        }

        // fetch part2

        const fetchAb1 = await getDataAbilities(1, 0);
        const fetchAb2 = await getDataAbilities(2, 1);
        const fetchAb3 = await getDataAbilities(3, 2);
        const fetchAb4 = await getDataAbilities(4, 3);
        const fetchAb5 = await getDataAbilities(5, 4);
        const fetchAb6 = await getDataAbilities(6, 5);
        const fetchAb7 = await getDataAbilities(7, 6);
        const fetchAb8 = await getDataAbilities(8, 7);
        const fetchAb9 = await getDataAbilities(9, 8);
        const fetchAb10 = await getDataAbilities(10, 9);

        console.log(pokemonNames);

    } catch (error) {
        if (error instanceof Error) console.log(error.message)
    }
}

getDataPokemon()