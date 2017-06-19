'use strict';

const filterByName = (datapokemon,query) => {
    return datapokemon.filter( (data) => {
        if (data.pokemon_species.name.toLowerCase().indexOf(query.toLowerCase()) != -1){
            return data;
        }
    });
};