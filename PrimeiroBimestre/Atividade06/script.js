const tarefaInput = document.getElementById('tarefa');
const botaoAdicionar = document.getElementById('botaoAdicionar');
const lista = document.getElementById('lista');

function adicionarTarefa() {
    const texto = tarefaInput.value;
    if (texto.trim() !== "") {
        const novoItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        const span = document.createElement('span');
        span.textContent = texto;
        novoItem.appendChild(checkbox);
        novoItem.appendChild(span);
        lista.appendChild(novoItem);
        tarefaInput.value = "";
    }
}

botaoAdicionar.addEventListener('click', adicionarTarefa);

lista.addEventListener('click', function(event) {
    if (event.target.type !== 'checkbox') {
        const itemParaRemover = event.target.closest('li');
        if (itemParaRemover) {
            itemParaRemover.remove();
        }
    }
});