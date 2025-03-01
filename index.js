const tarefas = [];

function salvarTarefa() {
  const tarefa = document.getElementById("tarefa").value;
  const lista = document.getElementById("lista");
  //lista.innerHTML = "";

  tarefas.push(tarefa);

  tarefas.forEach((item, indice) => {
    let li = document.createElement("li");
    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "X";

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    li.textContent = item;
    li.id = indice;
    i = indice;

    document.getElementById("lista").appendChild(li);
    document.getElementById("lista").appendChild(checkbox);
    document.getElementById("lista").appendChild(botaoRemover);

    botaoRemover.onclick = function () {
      removerTarefa(li, botaoRemover, checkbox);
      li = "";
    };
  });
}

function removerTarefa(li, botaoRemover, checkbox) {
  if (checkbox.checked) {
    li.remove();
    botaoRemover.remove();
    checkbox.remove();

    // let lista_filtrada = (lista, i) => lista.filter((e) => e.id != i);
    // lista = lista_filtrada;
  }
}
