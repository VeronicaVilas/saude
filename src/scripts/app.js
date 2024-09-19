function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    if (peso > 0 && altura > 0) {
        const imc = peso / (altura * altura);
        let categoria = '';

        if (imc < 18.5) {
            categoria = 'Baixo peso';
        } else if (imc < 24.9) {
            categoria = 'Peso normal';
        } else if (imc < 29.9) {
            categoria = 'Sobrepeso';
        } else {
            categoria = 'Obesidade';
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
    document.getElementById(modalId).classList.remove('hidden');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
}