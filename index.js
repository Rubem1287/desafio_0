let tarefas = [];

function salvarTarefa() {
  const tarefa = document.getElementById("tarefa").value;
  const lista = document.getElementById("lista");

  tarefas.push(tarefa);

  let li = document.createElement("li");
  const botaoRemover = document.createElement("button");
  botaoRemover.textContent = "X";

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  li.textContent = tarefa;

  document.getElementById("lista").appendChild(li);
  document.getElementById("lista").appendChild(checkbox);
  document.getElementById("lista").appendChild(botaoRemover);

  botaoRemover.onclick = function () {
    removerTarefa(tarefa, checkbox, li, botaoRemover);
  };
}

function removerTarefa(tarefa, checkbox, li, botaoRemover) {
  if (checkbox.checked) {
    tarefas = tarefas.filter((tarefaremove) => tarefaremove !== tarefa);

    li.remove();
    botaoRemover.remove();
    checkbox.remove();

    console.log(tarefas);
  }
}
