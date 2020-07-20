const inicio = {
	iniciarJuego: () => {
		inicio.valorDeBarra = 0;
		inicio.resetearTiempo(inicio.valorDeBarra);
		cartas.contenidoCartas();
		inicio.voltearCarta();
	},
	primeraCarta: '',
	segundaCarta: '',
	contador: 0,
	actual: '',
	valorDeBarra: 0,
	resetearTiempo: (valor) => {
		const barraDeTiempo = document.getElementById('barra-tiempo');
		barraDeTiempo.style.width = `${valor}%`;
	},
	voltearCarta: () => {
		const barraDeTiempo = document.getElementById('barra-tiempo');
		const cartas = document.getElementsByClassName('carta');
		const fondoPopUp = document.getElementById('pop-up-fondo');
		const fondoPopUpGameOver = document.getElementById('pop-up-fondo-game-over');
		const closePopUp = document.getElementById('pop-up-close');
		const closePopUpGameOver = document.getElementById('pop-up-close-game-over');
		let tiempo;

		setTimeout(() => {
			tiempo = setInterval(() => {
				if (inicio.valorDeBarra < 100) {
					inicio.valorDeBarra += 2.5;
					barraDeTiempo.style.width = `${inicio.valorDeBarra}%`;
				} else {
					clearInterval(tiempo);
					fondoPopUpGameOver.style.zIndex = 1000;

					setTimeout(() => {
						fondoPopUpGameOver.style.opacity = 1;
						inicio.contador = 0;
					}, 500);
				}
			}, 1000);
		}, 500)



		for (i = 0; i < cartas.length; i++) {
			cartas[i].addEventListener('click', e => {
				const target = e.path[1];

				if (target.classList[1] === undefined && inicio.segundaCarta === '') {
					target.classList.add('activa');
					const valor = target;

					if (inicio.primeraCarta === '') {
						inicio.primeraCarta = valor
					} else {
						inicio.segundaCarta = valor;

						if (inicio.primeraCarta.innerHTML === inicio.segundaCarta.innerHTML) {
							if (inicio.valorDeBarra !== 0) {
								inicio.valorDeBarra -= 5;
								barraDeTiempo.style.width = `${inicio.valorDeBarra}%`;
							}

							inicio.primeraCarta = '';
							inicio.segundaCarta = '';
							inicio.contador++;

							if (inicio.contador === (cartas.length/2)) {
								if (tiempo)
									clearInterval(tiempo);
								
								fondoPopUp.style.zIndex = 1000;

								setTimeout(() => {
									fondoPopUp.style.opacity = 1;
									inicio.contador = 0;
								}, 500);
							}
						} else {
							setTimeout(() => {
								inicio.primeraCarta.classList.remove('activa');
								inicio.segundaCarta.classList.remove('activa');
								inicio.primeraCarta = '';
								inicio.segundaCarta = '';
							}, 500)
						}
					}
				}
			})
		}

		closePopUp.addEventListener('click', e => {
			fondoPopUp.style.opacity = 0;
			fondoPopUp.style.zIndex = -1;
			inicio.iniciarJuego();
		})

		closePopUpGameOver.addEventListener('click', e => {
			fondoPopUpGameOver.style.opacity = 0;
			fondoPopUpGameOver.style.zIndex = -1;
			inicio.iniciarJuego();
		})
	}
}

document.addEventListener('DOMContentLoaded', e => {
	inicio.iniciarJuego();
	inicio.actual = document.querySelector('.click');
})