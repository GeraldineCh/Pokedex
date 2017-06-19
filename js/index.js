'use strict';

const render = (root) => {
    root.empty();
    const wrapper = $('<div class="wrapper"></div>');
    //Componentes
    wrapper.append(Header());
    wrapper.append(Search());
    //wrapper.append(PokeGrid());

    root.append(wrapper);
	 $("img.lazy").lazyload();
};

const state = {
    datapokemon: null,
    namepokemon: null,
};

$( _ => {

    getJSON('http://pokeapi.co/api/v2/pokedex/1/', (err, json) => {

        if (err) { return alert(err.message);}

        state.datapokemon = json;

        const root = $('.root');
        render(root);
    });
	
});