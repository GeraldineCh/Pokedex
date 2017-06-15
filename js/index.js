'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Header(_ => render(root)));
     root.append(wrapper);
  
}

const state = {
  pokemon: null,
  selectedPokemon: null
};

$( _ => {

  getJSON('http://pokeapi.co/api/v2/pokemon-species/', (err, json) => {

    if (err) { return alert(err.message);}
      
    state.pokemon = json;

    const root = $('.root');
    render(root);
      
  });

});


