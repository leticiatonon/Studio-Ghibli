import AnimaNumeros from './anima-numeros.js';

export default function initFetchFilmes() {
  async function fetchFilmes(url) {
    const filmesResponse = await fetch(url);
    const filmesJSON = await filmesResponse.json();
    const numerosGrid = document.querySelector('.numeros-grid');

    function createFilme(filme) {
      const div = document.createElement('div');
      div.classList.add('numero-filme');

      div.innerHTML = `<h3>${filme.titulo}</h3><span data-numero>${filme.numero}</span>`;
      return div;
    }

    filmesJSON.forEach((filme) => {
      const divFilme = createFilme(filme);
      numerosGrid.appendChild(divFilme);
    });
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  fetchFilmes('./filmesapi.json');
}
