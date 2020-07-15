const carta = {
	crearCartas: () => {
		const cantidadCartas = cartas.todasCartas.length;
		const ancho = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		const alto = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
		const areaTablero = (ancho-10)*(alto-60);
		const areaCarta = areaTablero/cantidadCartas;
		const altoAncho = Math.sqrt(areaCarta)-20;

		let tablero = document.getElementById('tablero');
		(ancho <= 480) ?tablero.style.height = `calc(${alto-50}px)` :tablero.style.height = `calc(${alto-50}px)`;
		tablero.innerHTML = '';

		cartas.todasCartas.map(carta => {
			tablero.insertAdjacentHTML('beforeend', 
				`<div class="carta" style="height:${altoAncho}px; width:${altoAncho}px;">
				  <img class="fa" src="img/${carta}.png" style="eight:${altoAncho}px; width:${altoAncho}px;">
				  <span class="back" style="height:${altoAncho}px; width:${altoAncho}px;"></span>
				</div>`);
		})
	}
}