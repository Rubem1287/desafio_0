const tarefas = [];

function salvarTarefa() {
  const tarefa = document.getElementById("tarefa").value;
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  tarefas.push(tarefa);

  tarefas.forEach((item) => {
    let li = document.createElement("li");
    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "X";
    botaoRemover.addEventListener("click", removerTarefa());

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    li.textContent = item;

    document.getElementById("lista").appendChild(li);
    document.getElementById("lista").appendChild(checkbox);
    document.getElementById("lista").appendChild(botaoRemover);
  });
}

function removerTarefa() {
  let lista = document.getElementById("lista");
  let li = lista.querySelectorAll("li");

  li.forEach((item) => {
    let checkbox = item.querySelector("input[type='checkbox']");
    if (checkbox.checked) {
      item.remove();
    }
  });
}
