
const divdias= document.getElementById('dias');
const divhoras= document.getElementById('horas');
const divminutos= document.getElementById('minutos');
const divsegundos= document.getElementById('segundos');
const divano = document.getElementById('ano');
const loading = document.getElementById('imgloading');
const divcontador = document.getElementById('contador');

//atualiza o ano dinamicamente
const nextyear= new Date().getFullYear() + 1;
const novoano = new Date(`Janeiro, 01 ${nextyear} 00:00:00`);

divano.textContent = nextyear;

const tempodasunidades = unidade => unidade < 10 ? '0' + unidade : unidade;

function inserindovaloresdocontador ({ dias, horas, minutos, segundos }) {
    divdias.textContent = tempodasunidades(dias);
    divhoras.textContent = tempodasunidades(horas);
    divminutos.textContent = tempodasunidades(minutos);
    divsegundos.textContent = tempodasunidades(segundos);
}

//atualiza a contagem
const updatecontagem = () => {
   const horaatual = new Date();
   const diferencatempo = novoano - horaatual;
   const dias = Math.floor(diferencatempo/ 1000 / 60 / 60 / 24);
   const horas = Math.floor(diferencatempo/ 1000 / 60 / 60 ) % 24;
   const minutos = Math.floor(diferencatempo/ 1000 / 60) % 60;
   const segundos = Math.floor(diferencatempo/ 1000) % 60;

   inserindovaloresdocontador({dias, horas, minutos, segundos});
}

setTimeout(() => {
     loading.remove();
     divcontador.style.display= 'flex';
}, 1000);

setInterval(updatecontagem, 1000);