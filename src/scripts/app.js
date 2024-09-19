function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    if (peso > 0 && altura > 0) {
        const imc = peso / (altura * altura);
        let categoria = '';

        if (imc < 18.5) {
            categoria = 'Abaixo do peso';
        } else if (imc >= 18.6 && imc <= 24.9) {
            categoria = 'Peso ideal';
        } else if (imc >= 25.0 && imc <= 29.9) {
            categoria = 'Levemente acima do peso';
        } else if (imc >= 30 && imc <= 34.9) {
            categoria = 'Obesidade grau I';
        } else if (imc >= 35 && imc <= 39.9) {
            categoria = 'Obesidade grau II';
        } else {
            categoria = 'Obesidade grau III';
        }

        document.getElementById('imc-valor').textContent = `Seu IMC é: ${imc.toFixed(2)}`;
        document.getElementById('categoria').textContent = `Categoria: ${categoria}`;

        document.getElementById('imc-form').style.display = 'none';
        document.getElementById('resultado').style.display = 'block';
        document.getElementById('calcular-novamente').style.display = 'block';
    } else {
        alert('Por favor, insira valores válidos.');
    }
}

function mostrarFormulario() {
    document.getElementById('imc-form').style.display = 'block';
    document.getElementById('resultado').style.display = 'none';
    document.getElementById('calcular-novamente').style.display = 'none';
}

function toggleExplanation(event) {
    event.preventDefault();
    const explanation = document.getElementById('explanation');
    explanation.classList.toggle('hidden');
}

function openModal(modalId) {
    console.log('Abrindo modal:', modalId);
    document.getElementById(modalId).classList.remove('hidden');
    document.body.classList.add('no-scroll');
}

function closeModal(modalId) {
    console.log('Fechando modal:', modalId);
    document.getElementById(modalId).classList.add('hidden');
    document.body.classList.remove('no-scroll');
}
