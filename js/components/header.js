'use strict';

const Header = () => {
    const header = $('<header><div class="container"></div></header>');
    const title = $('<h1 class="center-align">Pokédex</h1>');
    
    header.append(title);
    
    return header;
}