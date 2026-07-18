        // Fetch = Function used for making HTTP requests to fetch resources.
        //         (JSON style data, images, files).
        //         Simplifies asynchronus data fetching in JavaScript and
        //         used for interacting with APIs to retreive and send
        //         data asynchronusly over the web.
        //         fetch(url, {options})
        /* fetch("https://pokeapi.co/api/v2/pokemon/ditto")
            .then(response => response.json()) // Response object
            .then(data => console.log(data)) // data object
            .catch(error => console.error(error)); // error handling */

        /* fetch("https://pokeapi.co/api/v2/pokemon/ditto")
            .then(response => response.json()) // Response object
            .then(data => console.log(data.name)) // specified data e.g name
            .catch(error => console.error(error)); // error handling */

        /* fetch("https://pokeapi.co/api/v2/pokemon/spongebob")
            .then(response => console.log(response)) // 
            // 404 error resource not located but due to promise still returns a response object
            .then(data => console.log(data)) // data object
            .catch(error => console.error(error)); // error handling */

        /* fetch("https://pokeapi.co/api/v2/pokemon/spongebob")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => console.log(data)) // data object
            .catch(error => console.error(error)); // error handling */

    fetchData();    

        async function fetchData() {

            try {

                const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log(data);
                const pokemonSprite = data.sprites.front_default;
                const imgElement = document.getElementById("pokemonSprite");

                imgElement.src = pokemonSprite;
                imgElement.style.display = "block";

            }
            catch (error) {
                console.error(error);
            }
        }