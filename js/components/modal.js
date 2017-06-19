'use strict';

const Modal = (data) => {
	const modal = $('<div id="modal1" class="modal"></div>');
	const content = $('<div class="modal-content"></div>');
	const close = $('<span class="float-right modal-close ico-close">&times;</span>');
	const specimen = $('<p class="pokename title-modal">' +data.pokemon_species.name+'</p>');
	const photo = $(`<img class="padd-left left" src= "http://serebii.net/art/th/${data.entry_number}.png"/>`);
	const description = $('<div class="description center-align"></div>');
	const altura = $('<span>Altura: ' + + '</span>');
	const peso = $('<span>Peso: ' + +'</span>')
	const categoria = $('<span>Categoria: '+ +'</span>')
	const habilidad = $('<span>Habilidad: '+ +'</span>')
	
	content.append(close);
	content.append(specimen);
	content.append(photo);
	description.append(altura);
	description.append(peso);
	description.append(categoria);
	description.append(habilidad);
	content.append(description);
	modal.append(content);
	

	close.on('click', () => {
		modal.remove();
		$('.modal-overlay').remove();    
	}); 

	return modal.modal();
}