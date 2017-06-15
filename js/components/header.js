'use strict';

const Header = (update) => {
  const header = $("<header></header>");
  const title = $("<h3>Pokedex</h3>");
 const busqueda = $('<div class="input-field inline">')
  const icon = $('<i class="material-icons prefix tiny">search</i>');
 const input = $('<input id="last_name" type="text" class="validate inline" placeholder="Busca tu pokemon">')

  header.append(title);
busqueda.append(icon);
 busqueda.append(input);
header.append(busqueda);
  return header;
}