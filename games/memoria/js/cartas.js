const cartas = {
	todasCartas: new Array(),
	cantParejas: 10,
	contenidoCartas: () => {
		cartas.todasCartas = new Array();

		for (c = 0; c < cartas.cantParejas; c++) {
			let valor = Math.ceil(Math.random() * 30);
			while (cartas.todasCartas.includes(valor)) {
				valor = Math.ceil(Math.random() * 30);
			}

			cartas.todasCartas.push(valor);
			cartas.todasCartas.push(valor);
		}

		cartas.todasCartas = cartas.todasCartas.sort(() =>  Math.random() - 0.5);
		carta.crearCartas();
	}
}