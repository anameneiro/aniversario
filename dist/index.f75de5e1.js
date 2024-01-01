AOS.init();
const countDowDate = new Date("Aug 10, 2024 14:00:00").getTime();
const x = setInterval(function() {
    const agora = new Date().getTime();
    const distancia = countDowDate - agora;
    const dias = Math.floor(distancia / 86400000);
    const horas = Math.floor(distancia % 86400000 / 3600000);
    const minutos = Math.floor(distancia % 3600000 / 60000);
    const segundos = Math.floor(distancia % 60000 / 1000);
    document.getElementById("dias").innerHTML = dias;
    document.getElementById("horas").innerHTML = horas;
    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("segundos").innerHTML = segundos;
}, 1000);

//# sourceMappingURL=index.f75de5e1.js.map
