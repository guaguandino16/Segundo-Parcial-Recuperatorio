document.addEventListener('DOMContentLoaded', function () {
    // Referencias a los elementos del formulario
    const inputCantidadObras = document.querySelector('#cantidad-obras');
    const inputConsumoPorLuz = document.querySelector('#consumo-por-luz');
    const inputCostoKwh = document.querySelector('#costo-kwh');
    const btnIniciarCarga = document.querySelector('#btn-iniciar-carga');
    const camposObras = document.querySelector('#campos-obras');
    const btnCalcular = document.querySelector('#btn-calcular');
    const btnReiniciar = document.querySelector('#btn-reiniciar');
    const resultados = document.querySelector('#resultados');

    // Datos generales ya confirmados y lista de obras cargadas hasta el momento
    let cantidadObras = 0;
    let consumoPorLuz = 0;
    let costoKwh = 0;
    let obrasCargadas = [];

    btnIniciarCarga.addEventListener('click', function () {
        const cantidad = parseInt(inputCantidadObras.value, 10);
        const consumo = parseFloat(inputConsumoPorLuz.value);
        const costo = parseFloat(inputCostoKwh.value);

        if (!Number.isInteger(cantidad) || cantidad < 1) {
            alert('Ingresá una cantidad de obras válida (un número entero mayor a 0).');
            return;
        }
        if (isNaN(consumo) || consumo <= 0) {
            alert('Ingresá un consumo por hora de cada luz válido (mayor a 0).');
            return;
        }
        if (isNaN(costo) || costo <= 0) {
            alert('Ingresá un costo por kWh válido (mayor a 0).');
            return;
        }

        cantidadObras = cantidad;
        consumoPorLuz = consumo;
        costoKwh = costo;
        obrasCargadas = [];

        // Los datos generales quedan confirmados: se deshabilitan para no
        // poder modificarlos a mitad de la carga de obras.
        inputCantidadObras.disabled = true;
        inputConsumoPorLuz.disabled = true;
        inputCostoKwh.disabled = true;
        btnIniciarCarga.disabled = true;

        mostrarFormularioDeObra();
    });

    // Genera el mini formulario para cargar una obra a la vez y la lista
    // donde se van a ir mostrando las que ya se cargaron.
    function mostrarFormularioDeObra() {
        camposObras.innerHTML = `
            <div class="campo-obra-nueva">
                <label for="obra-nombre">Nombre de la obra</label>
                <input type="text" id="obra-nombre">

                <label for="obra-luces">Cantidad de luces móviles</label>
                <input type="number" id="obra-luces" min="1">

                <label for="obra-horas">Horas de funcionamiento por día</label>
                <input type="number" id="obra-horas" min="0" max="24" step="0.5">

                <button type="button" id="btn-agregar-obra">Agregar obra</button>
            </div>
            <ul class="lista-obras-cargadas" id="lista-obras-cargadas"></ul>
        `;

        document.querySelector('#btn-agregar-obra').addEventListener('click', agregarObra);
    }

    function agregarObra() {
        const inputNombre = document.querySelector('#obra-nombre');
        const inputLuces = document.querySelector('#obra-luces');
        const inputHoras = document.querySelector('#obra-horas');

        const nombre = inputNombre.value.trim();
        const luces = parseInt(inputLuces.value, 10);
        const horas = parseFloat(inputHoras.value);

        if (nombre === '') {
            alert('Ingresá el nombre de la obra.');
            return;
        }
        if (!Number.isInteger(luces) || luces < 1) {
            alert('Ingresá una cantidad de luces móviles válida (un número entero mayor a 0).');
            return;
        }
        if (isNaN(horas) || horas <= 0 || horas > 24) {
            alert('Ingresá las horas de funcionamiento por día (un número entre 0 y 24).');
            return;
        }

        obrasCargadas.push({ nombre: nombre, luces: luces, horas: horas });

        const item = document.createElement('li');
        item.textContent = `${obrasCargadas.length}. ${nombre} — ${luces} luces — ${horas} hs/día`;
        document.querySelector('#lista-obras-cargadas').appendChild(item);

        inputNombre.value = '';
        inputLuces.value = '';
        inputHoras.value = '';
        inputNombre.focus();

        // Se llegó a la cantidad de obras declarada al principio: se
        // deshabilita seguir cargando y se habilita calcular resultados.
        if (obrasCargadas.length === cantidadObras) {
            inputNombre.disabled = true;
            inputLuces.disabled = true;
            inputHoras.disabled = true;
            document.querySelector('#btn-agregar-obra').disabled = true;
            btnCalcular.disabled = false;
        }
    }

    btnCalcular.addEventListener('click', function () {
        let consumoTotalKwh = 0;
        let obraConMasHoras = obrasCargadas[0];
        let cantidadConMasDe20Luces = 0;

        for (let i = 0; i < obrasCargadas.length; i++) {
            const obra = obrasCargadas[i];
            const consumoDeEstaObra = obra.luces * obra.horas * consumoPorLuz;
            consumoTotalKwh += consumoDeEstaObra;

            if (obra.horas > obraConMasHoras.horas) {
                obraConMasHoras = obra;
            }
            if (obra.luces > 20) {
                cantidadConMasDe20Luces++;
            }
        }

        const consumoPromedioKwh = consumoTotalKwh / obrasCargadas.length;
        const costoDiarioObraMax = obraConMasHoras.luces * obraConMasHoras.horas * consumoPorLuz * costoKwh;
        const porcentajeConMasDe20Luces = (cantidadConMasDe20Luces / obrasCargadas.length) * 100;

        resultados.innerHTML = `
            <h2>Resultados</h2>
            <p>Consumo diario total entre todas las obras: ${consumoTotalKwh.toFixed(2)} kWh</p>
            <p>Consumo diario promedio por obra: ${consumoPromedioKwh.toFixed(2)} kWh</p>
            <p>Obra con mayor tiempo de funcionamiento: ${obraConMasHoras.nombre} (${obraConMasHoras.horas} hs/día) — costo diario: $${costoDiarioObraMax.toFixed(2)}</p>
            <p>Porcentaje de obras con más de 20 luces móviles: ${porcentajeConMasDe20Luces.toFixed(1)}%</p>
        `;

        btnCalcular.disabled = true;
        btnReiniciar.disabled = false;
    });

    btnReiniciar.addEventListener('click', function () {
        cantidadObras = 0;
        consumoPorLuz = 0;
        costoKwh = 0;
        obrasCargadas = [];

        inputCantidadObras.value = '';
        inputConsumoPorLuz.value = '';
        inputCostoKwh.value = '';
        inputCantidadObras.disabled = false;
        inputConsumoPorLuz.disabled = false;
        inputCostoKwh.disabled = false;
        btnIniciarCarga.disabled = false;

        camposObras.innerHTML = '';
        resultados.innerHTML = '';

        btnCalcular.disabled = true;
        btnReiniciar.disabled = true;
    });
});
