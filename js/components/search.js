'use strict';

const Search = (update) => {
    const parent = $('<div class="container search"></div>');
    const entry = $('<div class="input-field col s7"></div>');
    const icon = $('<span><i class="fa fa-search"></i></span>');
    const input = $('<input type="text"/>');
    const row = $('<div class="row"></div>')
    const reveal = $('<div></div>');
    const filter = $('<div class="filter"></div>');

    entry.append(icon);
    entry.append(input);
    parent.append(entry);
    parent.append(row);
    row.append(reveal);

	input.on('keyup', (e) => {
		if(input.val() != 0){
			const value = filterByName(state.namepokemon, input);
			reRender(value, parent.next());
		}
	});
	
  state.datapokemon.pokemon_entries.forEach(function (e){ 
      reveal.append(PokeGrid(e,update));
  });  
	
    return parent;
}

const reRender = (filter, value, update)=>{
    filter.empty();
	value.forEach((e)=> {
		filter.append(PokeGrid(e,update));
	});
};