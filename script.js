const checkbox1 = document.getElementById('valor1')
const checkbox2 = document.getElementById('valor2')
const resultado = document.getElementById('resultado')
const seletor = document.getElementById('op')

function checkResultado() {
    switch (seletor.value) {
        case 'OR':
            if (checkbox1.checked || checkbox2.checked) {
                resultado.innerHTML = 'Verdadeiro'
                resultado.style.backgroundColor = 'green'
            } else {
                resultado.innerHTML = 'Falso'
                resultado.style.backgroundColor = 'red'
            }
            break;
        case 'AND':
            if (checkbox1.checked && checkbox2.checked) {
                resultado.innerHTML = 'Verdadeiro'
                resultado.style.backgroundColor = 'green'
            } else {
                resultado.innerHTML = 'Falso'
                resultado.style.backgroundColor = 'red'
            }
            break;
        default:
            resultado.innerHTML = 'ERRO - OP INVÁIDA'
            break
        }
}
